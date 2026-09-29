"use client";

type StubSectionProps = {
  title: string;
  description: string;
};

export function StubSection({ title, description }: StubSectionProps) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center shadow-sm">
      <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
      <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">{description}</p>
      <p className="mt-4 text-xs text-slate-400">Раздел запланирован в следующих версиях платформы.</p>
    </div>
  );
}
