/**
 * Однократная вставка блоков пояснений после строк @section в listing-modul-vizualnoe-predstavlenie.txt.
 * Повторный запуск: если после @section уже идёт «// Пояснение к фрагменту:», блок не дублируется.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const listingPath = path.join(
  __dirname,
  "../проектирование/listing-modul-vizualnoe-predstavlenie.txt"
);

/** @type {Record<string, string[]>} */
const NOTES = {
  "src/app/layout.tsx": [
    "Пояснение к фрагменту:",
    "Корневой layout (App Router): метаданные страницы (title, description, favicon), шрифт Geist с наборами latin и cyrillic,",
    "подключение глобальных стилей и провайдер TRPCReactProvider — обязательная обёртка для клиентских вызовов tRPC.",
  ],
  "src/app/page.tsx": [
    "Пояснение к фрагменту:",
    "Стартовая страница: фон и карточка с логотипом, ссылка на регистрацию, кнопки перехода к входу ученика и педагога.",
  ],
  "src/app/register/page.tsx": [
    "Пояснение к фрагменту:",
    "Регистрация ученика: форма (телефон, пароль, подтверждение), валидация через общие компоненты, мутация student.register,",
    "установка cookie сессии и редирект в личный кабинет.",
  ],
  "src/app/student/login/page.tsx": [
    "Пояснение к фрагменту:",
    "Вход ученика: отправка логина/пароля через tRPC, при успехе — cookie и переход на /student/dashboard.",
  ],
  "src/app/student/dashboard/page.tsx": [
    "Пояснение к фрагменту:",
    "Личный кабинет ученика: боковое меню разделов, загрузка данных dashboard и списка заданий, отправка ответов на задания, выход.",
  ],
  "src/app/teacher/page.tsx": [
    "Пояснение к фрагменту:",
    "Вход педагога: форма на базе LoginCard, мутация teacher.login, запись идентификатора в cookie и переход в /teacher/dashboard.",
  ],
  "src/app/teacher/dashboard/page.tsx": [
    "Пояснение к фрагменту:",
    "Кабинет педагога: меню (создание урока, библиотека, классы), мастер из 4 шагов (мета, конструктор блоков, выдача ссылки/QR, публикация),",
    "сохранение конфигурации занятия в assignment через tRPC, назначение классам.",
  ],
  "src/app/_components/login-card.tsx": [
    "Пояснение к фрагменту:",
    "Переиспользуемая оболочка экрана входа: оформление страницы, ссылка «на главную», слот полей формы, вывод ошибки, кнопка отправки.",
  ],
  "src/app/_components/phone-input.tsx": [
    "Пояснение к фрагменту:",
    "Поле телефона с нормализацией и проверкой (libphonenumber-js), используется в регистрации и других формах.",
  ],
  "src/app/_components/password-input.tsx": [
    "Пояснение к фрагменту:",
    "Поле пароля с индикатором надёжности (react-password-strength-bar) и переключателем видимости.",
  ],
  "src/styles/globals.css": [
    "Пояснение к фрагменту:",
    "Глобальные стили Tailwind CSS v4: @import tailwindcss и блок @theme с привязкой семейства шрифтов к переменной Geist.",
  ],
  "src/trpc/react.tsx": [
    "Пояснение к фрагменту:",
    "Клиент tRPC для React: фабрика api, типы RouterInputs/RouterOutputs, QueryClientProvider с HTTP-линком и SuperJSON, singleton на клиенте.",
  ],
  "src/trpc/query-client.ts": [
    "Пояснение к фрагменту:",
    "Фабрика QueryClient: staleTime для запросов, сериализация/десериализация через SuperJSON при SSR/гидратации.",
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
