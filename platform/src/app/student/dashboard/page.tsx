"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { api } from "~/trpc/react";
import { clearStudentCookie } from "~/lib/auth-cookies";
import {
  StudentHomeSection,
  StudentLessonsSection,
  StudentProfileSection,
  StudentProgressSection,
  type StudentAssignmentRow,
} from "~/components/student-cabinet/StudentSections";
import { StudentSidebar, type StudentNavId } from "~/components/student-cabinet/StudentSidebar";

export default function StudentDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<StudentNavId>("home");
  const { data, isLoading, error, isError } = api.student.dashboard.useQuery();

  function handleLogout() {
    clearStudentCookie();
    router.push("/");
  }

  const assignments = useMemo(
    () => (data?.assignedAssignments ?? []) as StudentAssignmentRow[],
    [data?.assignedAssignments]
  );

  const nextPending = useMemo(
    () =>
      assignments.find(
        (a) =>
          a.submission?.status !== "submitted" && a.submission?.status !== "auto_review"
      ) ?? null,
    [assignments]
  );

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 text-slate-600">
        Загрузка…
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
        <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-red-600">{error?.message ?? "Нет доступа. Войдите как ученик."}</p>
          <Link
            href="/student/login"
            className="mt-4 inline-block rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Войти
          </Link>
        </div>
      </main>
    );
  }

  const { student, stats } = data;
  const pendingCount = Math.max(0, stats.total - stats.completed);
  const classLabel = `${student.className} · ${student.schoolName}`;

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen w-full">
        <StudentSidebar
          activeTab={activeTab}
          onNavigate={setActiveTab}
          studentName={student.fullName}
          classLabel={classLabel}
          onLogout={handleLogout}
        />

        <section className="min-w-0 flex-1 overflow-y-auto p-4 lg:p-8">
          {activeTab === "home" && (
            <StudentHomeSection
              pendingCount={pendingCount}
              nextAssignment={nextPending}
              stats={stats}
            />
          )}
          {activeTab === "lessons" && <StudentLessonsSection assignments={assignments} />}
          {activeTab === "progress" && (
            <StudentProgressSection stats={stats} assignments={assignments} />
          )}
          {activeTab === "profile" && (
            <StudentProfileSection
              fullName={student.fullName}
              className={student.className}
              schoolName={student.schoolName}
              phone={student.phone}
            />
          )}
        </section>
      </div>
    </main>
  );
}
