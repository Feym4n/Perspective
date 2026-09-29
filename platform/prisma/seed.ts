import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";
import { seedDemoDashboard } from "./seed-demo";

const prisma = new PrismaClient();

async function main() {
  const templateCount = await prisma.assignmentTemplate.count();
  if (templateCount === 0) {
    await prisma.assignmentTemplate.createMany({
      data: [
        {
          key: "case_analysis",
          title: "Кейс + обоснование",
          description: "Ситуация, выбор решения, краткое обоснование",
        },
        {
          key: "method_plan",
          title: "Метод + план 2-3 шага",
          description: "Выбор метода и структурированный план действий",
        },
        {
          key: "error_fix",
          title: "Найди ошибки и исправь",
          description: "Анализ текста и исправление ошибок",
        },
        {
          key: "creative_poster",
          title: "Творческий плакат/эскиз",
          description: "Творческая работа с загрузкой изображения",
        },
        {
          key: "essay",
          title: "Эссе",
          description: "Развернутый текстовый ответ",
        },
      ],
    });
  }

  const schoolCount = await prisma.school.count();
  if (schoolCount === 0) {
    await prisma.school.createMany({
      data: [
        { name: "Гимназия №1", code: "G1" },
        { name: "Лицей №2", code: "L2" },
        { name: "Школа №3", code: "S3" },
      ],
    });
  }

  const courseCount = await prisma.course.count();
  if (courseCount === 0) {
    const course1 = await prisma.course.create({
      data: { title: "Введение в педагогику" },
    });
    const course2 = await prisma.course.create({
      data: { title: "Возрастная психология" },
    });
    await prisma.lesson.createMany({
      data: [
        { courseId: course1.id, title: "Занятие 1. Предмет педагогики", order: 1 },
        { courseId: course1.id, title: "Занятие 2. Методы обучения", order: 2 },
        { courseId: course2.id, title: "Занятие 1. Возрастные этапы", order: 1 },
      ],
    });
  }

  const existingTeacher = await prisma.teacher.findFirst({
    where: { emailOrPhone: "teacher@school.ru" },
  });
  if (!existingTeacher) {
    const teacherHash = await bcrypt.hash("teacher1", 10);
    const school1 = await prisma.school.findFirst({ where: { code: "G1" } });
    if (school1) {
      const teacher = await prisma.teacher.create({
        data: {
          emailOrPhone: "teacher@school.ru",
          passwordHash: teacherHash,
        },
      });
      await prisma.teacherSchool.create({
        data: { teacherId: teacher.id, schoolId: school1.id },
      });
    }
  }

  await seedDemoDashboard(prisma);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
