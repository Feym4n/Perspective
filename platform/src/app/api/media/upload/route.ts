import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

const KIND_TO_DIR: Record<string, string> = {
  video: "videos",
  audio: "audio",
  image: "images",
  presentation: "presentations",
};

function extensionByMime(mime: string, fallbackName: string): string {
  if (mime === "video/mp4") return ".mp4";
  if (mime === "audio/mpeg") return ".mp3";
  if (mime === "audio/mp4") return ".m4a";
  if (mime === "audio/wav") return ".wav";
  if (mime === "application/pdf") return ".pdf";
  if (mime === "image/png") return ".png";
  if (mime === "image/jpeg") return ".jpg";
  if (mime === "image/webp") return ".webp";
  const ext = path.extname(fallbackName);
  return ext || "";
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const kindRaw = formData.get("kind");
    const kind = typeof kindRaw === "string" ? kindRaw : "";
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Файл не передан" }, { status: 400 });
    }
    if (!KIND_TO_DIR[kind]) {
      return NextResponse.json({ error: "Неизвестный тип медиа" }, { status: 400 });
    }
    if (kind === "video" && file.type !== "video/mp4") {
      return NextResponse.json({ error: "Допустим только MP4" }, { status: 400 });
    }
    if (kind === "presentation" && file.type !== "application/pdf") {
      return NextResponse.json({ error: "Допустим только PDF" }, { status: 400 });
    }

    const ext = extensionByMime(file.type, file.name);
    const fileName = `${randomUUID()}${ext}`;
    const relativeDir = path.join("uploads", KIND_TO_DIR[kind]);
    const relativePath = path.join(relativeDir, fileName).replaceAll("\\", "/");
    const absoluteDir = path.join(process.cwd(), "public", relativeDir);
    const absolutePath = path.join(absoluteDir, fileName);

    await mkdir(absoluteDir, { recursive: true });
    const bytes = await file.arrayBuffer();
    await writeFile(absolutePath, Buffer.from(bytes));

    return NextResponse.json({
      ok: true,
      url: `/${relativePath}`,
      fileName: file.name,
      mime: file.type || null,
      size: file.size,
    });
  } catch {
    return NextResponse.json({ error: "Не удалось загрузить файл" }, { status: 500 });
  }
}
