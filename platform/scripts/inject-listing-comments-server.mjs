/**
 * Вставка пояснений после @section в listing-modul-server-obrabotki-i-servisov.txt
 * (идемпотентно: не дублирует, если уже есть «// Пояснение к фрагменту:»).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const listingPath = path.join(
  __dirname,
  "../проектирование/listing-modul-server-obrabotki-i-servisov.txt"
);

/** @type {Record<string, string[]>} */
const NOTES = {
  "prisma/schema.prisma": [
    "Пояснение к фрагменту:",
    "Схема данных Prisma (SQLite): школы, ученики, педагоги и связь M:N с школами, курсы и уроки, попытки,",
    "шаблоны заданий, задания урока с JSON-конфигом, поля формы, сдачи работ с ответами и оценкой.",
  ],
  "prisma/seed.ts": [
    "Пояснение к фрагменту:",
    "Сидирование БД при пустых таблицах: шаблоны типов заданий, демо-школы, курсы и уроки, тестовый педагог и привязка к школе.",
  ],
  "src/env.js": [
    "Пояснение к фрагменту:",
    "Проверка переменных окружения через @t3-oss/env-nextjs и Zod: DATABASE_URL, NODE_ENV; защита от сборки с неверной конфигурацией.",
  ],
  "src/server/db.ts": [
    "Пояснение к фрагменту:",
    "Единый экземпляр PrismaClient: логирование SQL в development, переиспользование в dev через globalThis.",
  ],
  "src/server/auth-utils.ts": [
    "Пояснение к фрагменту:",
    "Хеширование паролей и сравнение с сохранённым хешем (bcrypt), используется в роутерах регистрации и входа.",
  ],
  "src/server/api/trpc.ts": [
    "Пояснение к фрагменту:",
    "Инициализация tRPC: контекст с prisma и идентификаторами ученика/педагога из cookie, SuperJSON,",
    "публичные и защищённые процедуры (student/teacher), middleware с замером времени в dev.",
  ],
  "src/server/api/root.ts": [
    "Пояснение к фрагменту:",
    "Корневой роутер приложения: объединение school, student, teacher и экспорт типа AppRouter и createCaller.",
  ],
  "src/server/api/routers/school.ts": [
    "Пояснение к фрагменту:",
    "Публичный API списка школ (для выбора при регистрации ученика и привязки педагога).",
  ],
  "src/server/api/routers/student.ts": [
    "Пояснение к фрагменту:",
    "Сервисы ученика: регистрация и вход, данные кабинета и уроков, задания по уроку, отправка ответов с валидацией Zod.",
  ],
  "src/server/api/routers/teacher.ts": [
    "Пояснение к фрагменту:",
    "Сервисы педагога: регистрация и вход, «рабочее» занятие, CRUD заданий, публикация, список классов и назначение занятий.",
  ],
  "src/app/api/trpc/[trpc]/route.ts": [
    "Пояснение к фрагменту:",
    "Маршрут Next.js App Router: HTTP-адаптер fetch для tRPC (/api/trpc), контекст из заголовков запроса, логирование ошибок в dev.",
  ],
  "src/trpc/server.ts": [
    "Пояснение к фрагменту:",
    "Вызовы tRPC из React Server Components: кэшированный контекст и caller, HydrateClient для гидратации с клиентом.",
  ],
};

function toCommentLines(lines) {
  return lines.map((s) => `// ${s}`);
}

const reSection = /^@section\('\*\*(.+?)\*\*'\)$/;

const raw = fs.readFileSync(listingPath, "utf8");
const lines = raw.split(/\r?\n/);
const out = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  const m = line.match(reSection);
  out.push(line);
  if (m) {
    const key = m[1];
    const notes = NOTES[key];
    const nextLine = lines[i + 1];
    const already =
      typeof nextLine === "string" &&
      nextLine.trimStart().startsWith("// Пояснение к фрагменту:");
    if (notes && !already) {
      for (const c of toCommentLines(notes)) {
        out.push(c);
      }
    }
  }
  i++;
}

fs.writeFileSync(listingPath, out.join("\n"), { encoding: "utf8" });
console.log("Обновлён:", listingPath);
