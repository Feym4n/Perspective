export type GradingMode = "auto_first_try" | "manual" | "auto_with_override";

export type GradingTier = { minPercent: number; score: number };

export type GradingSettings = {
  gradingMode: GradingMode;
  maxScore: number;
  passPercent: number;
  tiers: GradingTier[];
};

export const DEFAULT_GRADING_SETTINGS: GradingSettings = {
  gradingMode: "auto_first_try",
  maxScore: 5,
  passPercent: 50,
  tiers: [
    { minPercent: 90, score: 5 },
    { minPercent: 75, score: 4 },
    { minPercent: 60, score: 3 },
    { minPercent: 50, score: 2 },
    { minPercent: 0, score: 1 },
  ],
};

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export function normalizeTiers(tiers: GradingTier[]): GradingTier[] {
  return [...tiers].sort((a, b) => b.minPercent - a.minPercent);
}

export function parseGradingSettings(raw: unknown): GradingSettings {
  const base = { ...DEFAULT_GRADING_SETTINGS };
  if (!isRecord(raw)) return base;
  const mode = raw.gradingMode;
  if (mode === "auto_first_try" || mode === "manual" || mode === "auto_with_override") {
    base.gradingMode = mode;
  }
  const maxScore = raw.maxScore;
  if (typeof maxScore === "number" && Number.isFinite(maxScore) && maxScore >= 1 && maxScore <= 1000) {
    base.maxScore = Math.floor(maxScore);
  }
  const passPercent = raw.passPercent;
  if (typeof passPercent === "number" && Number.isFinite(passPercent) && passPercent >= 0 && passPercent <= 100) {
    base.passPercent = Math.round(passPercent);
  }
  const tiersRaw = raw.tiers;
  if (Array.isArray(tiersRaw)) {
    const tiers: GradingTier[] = [];
    for (const row of tiersRaw) {
      if (!isRecord(row)) continue;
      const mp = row.minPercent;
      const sc = row.score;
      if (typeof mp === "number" && typeof sc === "number" && Number.isFinite(mp) && Number.isFinite(sc)) {
        tiers.push({ minPercent: Math.max(0, Math.min(100, Math.round(mp))), score: Math.max(0, Math.floor(sc)) });
      }
    }
    if (tiers.length > 0) base.tiers = normalizeTiers(tiers);
  }
  return base;
}

export function extractGradingSettingsFromConfigJson(configJson: string | null): GradingSettings {
  if (!configJson) return { ...DEFAULT_GRADING_SETTINGS };
  try {
    const parsed = JSON.parse(configJson) as unknown;
    if (!isRecord(parsed)) return { ...DEFAULT_GRADING_SETTINGS };
    return parseGradingSettings(parsed.gradingSettings);
  } catch {
    return { ...DEFAULT_GRADING_SETTINGS };
  }
}

export type GradableTestBlock = {
  id: string;
  correctOptionKeys: string[];
  correctOptionSerialized: string;
};

function compareOptionKeys(a: string, b: string) {
  const na = Number.parseInt(a.replace("opt-", ""), 10);
  const nb = Number.parseInt(b.replace("opt-", ""), 10);
  if (Number.isInteger(na) && Number.isInteger(nb) && na !== nb) return na - nb;
  return a.localeCompare(b);
}

export function normalizeOptionKeySet(keys: string[]): string[] {
  return [...new Set(keys.map((k) => k.trim()).filter(Boolean))].sort(compareOptionKeys);
}

export function serializeOptionKeySet(keys: string[]): string {
  return normalizeOptionKeySet(keys).join("|");
}

export function getCorrectOptionKeysFromBlock(item: Record<string, unknown>): string[] {
  const fromArray = Array.isArray(item.correctOptionKeys)
    ? item.correctOptionKeys
        .map((v) => (typeof v === "string" ? v : ""))
        .map((v) => v.trim())
        .filter(Boolean)
    : [];
  const legacy = typeof item.correctOptionKey === "string" ? item.correctOptionKey.trim() : "";
  return normalizeOptionKeySet(legacy ? [...fromArray, legacy] : fromArray);
}

export function getGradableSingleChoiceBlocksFromConfigJson(configJson: string | null): GradableTestBlock[] {
  if (!configJson) return [];
  try {
    const parsed = JSON.parse(configJson) as unknown;
    if (!isRecord(parsed)) return [];
    const blocks = parsed.taskBlocks;
    if (!Array.isArray(blocks)) return [];
    const out: GradableTestBlock[] = [];
    for (const item of blocks) {
      if (!isRecord(item)) continue;
      const id = typeof item.id === "string" ? item.id : "";
      const kind = item.kind === "test" ? "test" : "";
      const responseMode = item.responseMode === "single_choice" ? "single_choice" : "";
      const correctOptionKeys = getCorrectOptionKeysFromBlock(item);
      if (!id || kind !== "test" || responseMode !== "single_choice" || correctOptionKeys.length === 0) continue;
      out.push({
        id,
        correctOptionKeys,
        correctOptionSerialized: serializeOptionKeySet(correctOptionKeys),
      });
    }
    return out;
  } catch {
    return [];
  }
}

/** Первая подходящая ступень сверху (tiers уже по убыванию minPercent). */
export function scoreFromFirstTryPercent(firstTryPercent: number, settings: GradingSettings): number {
  const sorted = normalizeTiers(settings.tiers);
  for (const t of sorted) {
    if (firstTryPercent >= t.minPercent) {
      return Math.min(Math.max(0, Math.floor(t.score)), settings.maxScore);
    }
  }
  return 0;
}
