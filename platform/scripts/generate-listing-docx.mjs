import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Document, Packer, Paragraph, TextRun } from "docx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** argv: [node, script, input.txt?, output.docx?] — без аргументов: листинг модуля визуального представления */
const input = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(__dirname, "../проектирование/listing-modul-vizualnoe-predstavlenie.txt");
const output = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.join(__dirname, "../проектирование/listing-modul-vizualnoe-predstavlenie.docx");

/** Обычные строки листинга (код) */
const CODE = { font: "Consolas", size: 18 };
/** Вставленные пояснения // … — курсив и приглушённый цвет, чтобы отличать от кода */
const COMMENT_LINE = {
  font: "Consolas",
  size: 18,
  italics: true,
  color: "4A5568",
};

const raw = fs.readFileSync(input, "utf8");
const lines = raw.split(/\r?\n/);

/** @type {import('docx').Paragraph[]} */
const paragraphs = [];

const reSectionBold = /^@section\('\*\*(.+?)\*\*'\)$/;
const reSectionPlain = /^@section\('([^']+)'\)$/;

for (const line of lines) {
  let m = line.match(reSectionBold);
  if (m) {
    const filePath = m[1];
    paragraphs.push(
      new Paragraph({
        spacing: { before: 160, after: 80 },
        children: [
          new TextRun({ text: "@section('", ...CODE }),
          new TextRun({ text: filePath, bold: true, ...CODE }),
          new TextRun({ text: "')", ...CODE }),
        ],
      })
    );
    continue;
  }
  m = line.match(reSectionPlain);
  if (m && !line.includes("**")) {
    const filePath = m[1];
    paragraphs.push(
      new Paragraph({
        spacing: { before: 160, after: 80 },
        children: [
          new TextRun({ text: "@section('", ...CODE }),
          new TextRun({ text: filePath, bold: true, ...CODE }),
          new TextRun({ text: "')", ...CODE }),
        ],
      })
    );
    continue;
  }
  if (line === "@endsection") {
    paragraphs.push(
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "@endsection", ...CODE })],
      })
    );
    continue;
  }
  // Пояснения к фрагменту (добавлены в .txt отдельными строками // …)
  if (/^\s*\/\//.test(line)) {
    paragraphs.push(
      new Paragraph({
        spacing: { after: 0, line: 276 },
        children: [new TextRun({ text: line.length ? line : " ", ...COMMENT_LINE })],
      })
    );
    continue;
  }
  paragraphs.push(
    new Paragraph({
      spacing: { after: 0, line: 276 },
      children: [new TextRun({ text: line.length ? line : " ", ...CODE })],
    })
  );
}

const doc = new Document({
  sections: [
    {
      properties: {},
      children: paragraphs,
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
try {
  fs.writeFileSync(output, buffer);
  console.log("Written:", output);
} catch (err) {
  if (err && typeof err === "object" && "code" in err && err.code === "EBUSY") {
    const alt = output.replace(/\.docx$/i, "-копия.docx");
    fs.writeFileSync(alt, buffer);
    console.warn("Целевой .docx занят (закройте в Word). Записано:", alt);
  } else {
    throw err;
  }
}
