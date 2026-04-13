export const STUDENT_COOKIE = "student_id";
export const TEACHER_COOKIE = "teacher_id";

const COOKIE_MAX_AGE_DAYS = 30;

export function setStudentCookie(studentId: number) {
  document.cookie = `${STUDENT_COOKIE}=${studentId}; path=/; max-age=${60 * 60 * 24 * COOKIE_MAX_AGE_DAYS}; SameSite=Lax`;
}

export function setTeacherCookie(teacherId: number) {
  document.cookie = `${TEACHER_COOKIE}=${teacherId}; path=/; max-age=${60 * 60 * 24 * COOKIE_MAX_AGE_DAYS}; SameSite=Lax`;
}

export function clearStudentCookie() {
  document.cookie = `${STUDENT_COOKIE}=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  document.cookie = `${STUDENT_COOKIE}=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export function clearTeacherCookie() {
  document.cookie = `${TEACHER_COOKIE}=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  document.cookie = `${TEACHER_COOKIE}=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
