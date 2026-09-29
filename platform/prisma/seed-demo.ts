import type { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";
import { buildSimulatedAutoReviewMeta } from "../src/lib/submission-flow";

const DEMO_STUDENT_PASSWORD = "student1";

type DemoStudent = {
  phone: string;
  surname: string;
  name: string;
  patronymic?: string;
  className: string;
};

const DEMO_STUDENTS: DemoStudent[] = [
  { phone: "+79001000001", surname: "Иванов", name: "Пётр", patronymic: "Сергеевич", className: "10А" },
  { phone: "+79001000002", surname: "Смирнова", name: "Анна", patronymic: "Игоревна", className: "10А" },
  { phone: "+79001000003", surname: "Козлов", name: "Дмитрий", className: "10А" },
  { phone: "+79001000004", surname: "Новикова", name: "Мария", patronymic: "Андреевна", className: "10А" },
  { phone: "+79001000005", surname: "Волков", name: "Артём", className: "10Б" },
  { phone: "+79001000006", surname: "Морозова", name: "Елена", className: "10Б" },
];

function gradingJsonPayload(opts: {
  firstTryPercent: number;
  score: number;
  autoReview?: ReturnType<typeof buildSimulatedAutoReviewMeta>;
}) {
  const passed = opts.firstTryPercent >= 50;
  return JSON.stringify({
    firstTryPercent: opts.firstTryPercent,
    passPercent: 50,
    passedThreshold: passed,
    gradedBlocks: [],
    denominator: 2,
    numerator: Math.round((opts.firstTryPercent / 100) * 2),
    appliedScore: opts.score,
    gradingMode: "auto_first_try",
    ...(opts.autoReview ? { autoReview: opts.autoReview } : {}),
  });
}

function answersJsonSample(opts: {
  openReply?: string;
  choiceBlockId?: string;
  choiceLabel?: string;
}) {
  const studentReplies: Record<string, { kind: string; text: string; timestamp: number }> = {};
  if (opts.choiceBlockId && opts.choiceLabel) {
    studentReplies[opts.choiceBlockId] = {
      kind: "option",
      text: opts.choiceLabel,
      timestamp: Date.now() - 60_000,
    };
  }
  if (opts.openReply) {
    studentReplies["demo-open-1"] = {
      kind: "open",
      text: opts.openReply,
      timestamp: Date.now(),
    };
  }
  return JSON.stringify({
    openAnswers: {},
    revealedIds: ["demo-intro-1", "demo-test-1", "demo-open-1"],
    studentReplies,
  });
}

function buildQuestConfig(schoolId: number, className: string) {
  return JSON.stringify({
    assignedClasses: [{ schoolId, className }],
    taskBlocks: [
      {
        id: "demo-intro-1",
        kind: "text",
        title: "Введение",
        text: "Прочитайте материал и ответьте на вопросы по теме «Предмет педагогики».",
      },
      {
        id: "demo-test-1",
        kind: "test",
        title: "Вопрос 1",
        text: "Педагогика изучает:",
        responseMode: "single_choice",
        optionsRaw: "Только методы преподавания\nЗакономерности воспитания и обучения\nИсторию школ",
        correctOptionKey: "opt-1",
      },
      {
        id: "demo-open-1",
        kind: "test",
        title: "Открытый вопрос",
        text: "Сформулируйте своими словами, почему педагогика важна для будущего учителя.",
        responseMode: "open_question",
        optionsRaw: "Ваш ответ",
      },
    ],
    taskGraph: {
      edges: [
        { id: "e1", fromId: "demo-intro-1", toId: "demo-test-1", fromType: "block" },
        { id: "e2", fromId: "demo-test-1", toId: "demo-open-1", fromType: "block" },
      ],
    },
    gradingSettings: {
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
    },
  });
}

function buildTestConfig(schoolId: number, classNames: string[]) {
  return JSON.stringify({
    assignedClasses: classNames.map((className) => ({ schoolId, className })),
    taskBlocks: [
      {
        id: "demo-t2-q1",
        kind: "test",
        title: "Метод проектов",
        text: "Метод проектов относится к:",
        responseMode: "single_choice",
        optionsRaw: "Репродуктивным\nИсследовательским\nНаглядным",
        correctOptionKey: "opt-1",
      },
      {
        id: "demo-t2-q2",
        kind: "test",
        title: "Обратная связь",
        text: "Главная цель обратной связи:",
        responseMode: "single_choice",
        optionsRaw: "Контроль дисциплины\nКоррекция учебной деятельности\nОценка в журнале",
        correctOptionKey: "opt-1",
      },
    ],
    taskGraph: {
      edges: [{ id: "e1", fromId: "demo-t2-q1", toId: "demo-t2-q2", fromType: "block" }],
    },
    gradingSettings: {
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
    },
  });
}

function buildProjectConfig(schoolId: number, className: string) {
  return JSON.stringify({
    assignedClasses: [{ schoolId, className }],
    taskBlocks: [
      {
        id: "demo-proj-1",
        kind: "text",
        title: "Задание",
        text: "Подготовьте краткий план мини-урока (3 шага) для одного из методов обучения.",
      },
      {
        id: "demo-proj-open",
        kind: "test",
        title: "План урока",
        text: "Опишите цель, метод и ожидаемый результат.",
        responseMode: "open_question",
        optionsRaw: "Текст плана",
      },
    ],
    taskGraph: {
      edges: [{ id: "e1", fromId: "demo-proj-1", toId: "demo-proj-open", fromType: "block" }],
    },
    gradingSettings: {
      gradingMode: "manual",
      maxScore: 5,
      passPercent: 50,
      tiers: [{ minPercent: 0, score: 3 }],
    },
  });
}

export async function seedDemoDashboard(prisma: PrismaClient) {
  const school = await prisma.school.findFirst({ where: { code: "G1" } });
  if (!school) {
    console.warn("[seed-demo] Школа G1 не найдена — пропуск демо-данных");
    return;
  }

  const teacher = await prisma.teacher.findFirst({
    where: { emailOrPhone: "teacher@school.ru" },
  });
  if (!teacher) {
    console.warn("[seed-demo] teacher@school.ru не найден — пропуск");
    return;
  }

  const passwordHash = await bcrypt.hash(DEMO_STUDENT_PASSWORD, 10);
  const studentIds: Record<string, number> = {};

  for (const s of DEMO_STUDENTS) {
    const row = await prisma.student.upsert({
      where: { phone: s.phone },
      create: {
        surname: s.surname,
        name: s.name,
        patronymic: s.patronymic ?? null,
        phone: s.phone,
        passwordHash,
        schoolId: school.id,
        className: s.className,
      },
      update: {
        surname: s.surname,
        name: s.name,
        patronymic: s.patronymic ?? null,
        schoolId: school.id,
        className: s.className,
      },
    });
    studentIds[s.phone] = row.id;
  }

  const courseTitle = `Личная библиотека педагога #${teacher.id}`;
  let course = await prisma.course.findFirst({ where: { title: courseTitle } });
  if (!course) {
    course = await prisma.course.create({ data: { title: courseTitle } });
  }

  let lesson = await prisma.lesson.findFirst({
    where: { courseId: course.id, title: "Материалы педагога" },
  });
  if (!lesson) {
    lesson = await prisma.lesson.create({
      data: { courseId: course.id, title: "Материалы педагога", order: 1 },
    });
  }

  const assignmentSpecs = [
    {
      title: "Квест: Предмет педагогики",
      instruction: "Интерактивное занятие с тестом и открытым ответом",
      taskType: "Квест",
      answerFormat: "Смешанный",
      order: 1,
      isPublished: true,
      maxScore: 5,
      configJson: buildQuestConfig(school.id, "10А"),
    },
    {
      title: "Тест: Методы обучения",
      instruction: "Два вопроса с выбором ответа, автоматическая оценка",
      taskType: "Тест",
      answerFormat: "Выбор варианта",
      order: 2,
      isPublished: true,
      maxScore: 5,
      configJson: buildTestConfig(school.id, ["10А", "10Б"]),
    },
    {
      title: "Проект: План мини-урока",
      instruction: "Развёрнутый ответ и автопроверка открытого вопроса",
      taskType: "Проект",
      answerFormat: "Текст",
      order: 3,
      isPublished: true,
      maxScore: 5,
      configJson: buildProjectConfig(school.id, "10А"),
    },
    {
      title: "Черновик: Возрастная психология",
      instruction: "Материал в подготовке (не назначен активно)",
      taskType: "Квест",
      answerFormat: "Текст",
      order: 4,
      isPublished: false,
      maxScore: 5,
      configJson: JSON.stringify({
        assignedClasses: [{ schoolId: school.id, className: "10А" }],
        taskBlocks: [
          {
            id: "draft-1",
            kind: "text",
            title: "Черновик",
            text: "Скоро будет опубликовано.",
          },
        ],
        taskGraph: { edges: [] },
        gradingSettings: {
          gradingMode: "auto_first_try",
          maxScore: 5,
          passPercent: 50,
          tiers: [{ minPercent: 0, score: 1 }],
        },
      }),
    },
  ];

  const assignmentIds: Record<string, number> = {};

  for (const spec of assignmentSpecs) {
    const existing = await prisma.assignment.findFirst({
      where: { lessonId: lesson.id, title: spec.title },
    });
    const row = existing
      ? await prisma.assignment.update({
          where: { id: existing.id },
          data: {
            instruction: spec.instruction,
            taskType: spec.taskType,
            answerFormat: spec.answerFormat,
            order: spec.order,
            isPublished: spec.isPublished,
            maxScore: spec.maxScore,
            configJson: spec.configJson,
          },
        })
      : await prisma.assignment.create({
          data: {
            lessonId: lesson.id,
            title: spec.title,
            instruction: spec.instruction,
            taskType: spec.taskType,
            answerFormat: spec.answerFormat,
            order: spec.order,
            isPublished: spec.isPublished,
            maxScore: spec.maxScore,
            configJson: spec.configJson,
          },
        });
    assignmentIds[spec.title] = row.id;
  }

  const questId = assignmentIds["Квест: Предмет педагогики"]!;
  const testId = assignmentIds["Тест: Методы обучения"]!;
  const projectId = assignmentIds["Проект: План мини-урока"]!;

  const now = new Date();
  const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  async function upsertSubmission(
    studentId: number,
    assignmentId: number,
    data: {
      status: string;
      score: number | null;
      gradingJson: string;
      answersJson: string;
      submittedAt?: Date | null;
    }
  ) {
    await prisma.assignmentSubmission.upsert({
      where: {
        assignmentId_studentId: { assignmentId, studentId },
      },
      create: {
        assignmentId,
        studentId,
        status: data.status,
        score: data.score,
        gradingJson: data.gradingJson,
        answersJson: data.answersJson,
        submittedAt: data.submittedAt ?? null,
      },
      update: {
        status: data.status,
        score: data.score,
        gradingJson: data.gradingJson,
        answersJson: data.answersJson,
        submittedAt: data.submittedAt ?? null,
      },
    });
  }

  // Иванов — основной демо-аккаунт: часть сдана, тест в работе
  const ivanov = studentIds["+79001000001"]!;
  await upsertSubmission(ivanov, questId, {
    status: "submitted",
    score: 5,
    gradingJson: gradingJsonPayload({ firstTryPercent: 100, score: 5 }),
    answersJson: answersJsonSample({
      choiceBlockId: "demo-test-1",
      choiceLabel: "Закономерности воспитания и обучения",
      openReply: "Педагогика помогает осознанно строить урок и работать с классом.",
    }),
    submittedAt: dayAgo,
  });
  await upsertSubmission(ivanov, testId, {
    status: "draft",
    score: null,
    gradingJson: gradingJsonPayload({ firstTryPercent: 50, score: 2 }),
    answersJson: answersJsonSample({
      choiceBlockId: "demo-t2-q1",
      choiceLabel: "Исследовательским",
    }),
  });

  // Смирнова — автопроверка по квесту, тест сдан
  const smirnova = studentIds["+79001000002"]!;
  await upsertSubmission(smirnova, questId, {
    status: "auto_review",
    score: 4,
    gradingJson: gradingJsonPayload({
      firstTryPercent: 50,
      score: 4,
      autoReview: buildSimulatedAutoReviewMeta(),
    }),
    answersJson: answersJsonSample({
      choiceBlockId: "demo-test-1",
      choiceLabel: "Закономерности воспитания и обучения",
      openReply:
        "Без педагогики невозможно выстроить системную работу с детьми и отразить опыт в практике.",
    }),
    submittedAt: now,
  });
  await upsertSubmission(smirnova, testId, {
    status: "submitted",
    score: 3,
    gradingJson: gradingJsonPayload({ firstTryPercent: 50, score: 3 }),
    answersJson: answersJsonSample({ choiceBlockId: "demo-t2-q2", choiceLabel: "Коррекция учебной деятельности" }),
    submittedAt: dayAgo,
  });

  // Козлов — только черновик квеста
  const kozlov = studentIds["+79001000003"]!;
  await upsertSubmission(kozlov, questId, {
    status: "draft",
    score: null,
    gradingJson: "{}",
    answersJson: answersJsonSample({ choiceBlockId: "demo-test-1", choiceLabel: "Историю школ" }),
  });

  // Новикова — всё сдано, высокие баллы
  const novikova = studentIds["+79001000004"]!;
  for (const [aid, score, pct] of [
    [questId, 5, 100],
    [testId, 5, 100],
    [projectId, 4, 75],
  ] as const) {
    await upsertSubmission(novikova, aid, {
      status: aid === projectId ? "auto_review" : "submitted",
      score,
      gradingJson: gradingJsonPayload({
        firstTryPercent: pct,
        score,
        ...(aid === projectId ? { autoReview: buildSimulatedAutoReviewMeta() } : {}),
      }),
      answersJson: answersJsonSample({
        choiceBlockId: aid === testId ? "demo-t2-q1" : "demo-test-1",
        choiceLabel: "Закономерности воспитания и обучения",
        openReply: "Подробный ответ по теме занятия.",
      }),
      submittedAt: dayAgo,
    });
  }

  // 10Б — частичная сдача теста
  const volkov = studentIds["+79001000005"]!;
  await upsertSubmission(volkov, testId, {
    status: "submitted",
    score: 4,
    gradingJson: gradingJsonPayload({ firstTryPercent: 50, score: 4 }),
    answersJson: answersJsonSample({ choiceBlockId: "demo-t2-q1", choiceLabel: "Исследовательским" }),
    submittedAt: now,
  });

  const morozova = studentIds["+79001000006"]!;
  await upsertSubmission(morozova, testId, {
    status: "draft",
    score: null,
    gradingJson: "{}",
    answersJson: "{}",
  });

  // Первые попытки на тестовых блоках (для аналитики)
  const firstAnswers: Array<{
    studentId: number;
    assignmentId: number;
    blockId: string;
    optionKey: string;
  }> = [
    { studentId: ivanov, assignmentId: questId, blockId: "demo-test-1", optionKey: "opt-1" },
    { studentId: smirnova, assignmentId: questId, blockId: "demo-test-1", optionKey: "opt-1" },
    { studentId: novikova, assignmentId: questId, blockId: "demo-test-1", optionKey: "opt-1" },
    { studentId: novikova, assignmentId: testId, blockId: "demo-t2-q1", optionKey: "opt-1" },
    { studentId: novikova, assignmentId: testId, blockId: "demo-t2-q2", optionKey: "opt-1" },
    { studentId: smirnova, assignmentId: testId, blockId: "demo-t2-q1", optionKey: "opt-1" },
    { studentId: volkov, assignmentId: testId, blockId: "demo-t2-q1", optionKey: "opt-1" },
    { studentId: kozlov, assignmentId: questId, blockId: "demo-test-1", optionKey: "opt-2" },
  ];

  for (const fa of firstAnswers) {
    await prisma.testAnswerFirst.upsert({
      where: {
        studentId_assignmentId_blockId: {
          studentId: fa.studentId,
          assignmentId: fa.assignmentId,
          blockId: fa.blockId,
        },
      },
      create: fa,
      update: { optionKey: fa.optionKey },
    });
  }

  console.log("[seed-demo] Демо-данные загружены:");
  console.log("  Ученик (основной): +79001000001 / student1");
  console.log("  Педагог: teacher@school.ru / teacher1");
  console.log(`  Классы 10А, 10Б — ${DEMO_STUDENTS.length} учеников, 3 опубликованных занятия`);
}
