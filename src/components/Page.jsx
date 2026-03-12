import React from "react";

export default function Page({ title, subtitle, children }) {
  return (
    <div className="min-h-[calc(100vh-88px)] pt-24 pb-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
              {subtitle}
            </p>
          ) : null}
        </header>

        <div className="space-y-8">{children}</div>
      </div>
    </div>
  );
}
