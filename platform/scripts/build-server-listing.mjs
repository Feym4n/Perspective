/**
 * Собирает единый листинг «модуль серверной обработки данных и предоставления сервисов»:
 * Prisma, env, слой БД, tRPC, роутеры, HTTP- и RSC-адаптеры.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = path.join(__dirname, "..");

/** Порядок: схема и сиды → конфиг → инфраструктура → API → точки входа */
const REL_FILES = [
  "prisma/schema.prisma",
  "prisma/seed.ts",
  "src/env.js",
  "src/server/db.ts",
  "src/server/auth-utils.ts",
  "src/server/api/trpc.ts",
  "src/server/api/root.ts",
  "src/server/api/routers/school.ts",
  "src/server/api/routers/student.ts",
  "src/server/api/routers/teacher.ts",
  "src/app/api/trpc/[trpc]/route.ts",
  "src/trpc/server.ts",
];

const outPath = path.join(
  base,
  "проектирование/listing-modul-server-obrabotki-i-servisov.txt"
);

const sb = [];
for (const rel of REL_FILES) {
  const abs = path.join(base, rel);
  if (!fs.existsSync(abs)) {
    console.error("Нет файла:", abs);
    process.exit(1);
  }
  const sec = rel.replace(/\\/g, "/");
  sb.push(`@section('**${sec}**')`);
  sb.push(fs.readFileSync(abs, "utf8"));
  sb.push("@endsection");
  sb.push("");
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, sb.join("\n"), { encoding: "utf8" });
console.log("Записано:", outPath);
