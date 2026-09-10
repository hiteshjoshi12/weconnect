import type { ReactNode } from "react";

export function FormField({ id, label, required = true, error, children }: { id: string; label: string; required?: boolean; error?: string; children: ReactNode }) {
  const describedBy = error ? `${id}-error` : undefined;
  return <div><label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#333]">{label}{required && <span className="text-[#A57C35]">*</span>}</label>{children && <div aria-describedby={describedBy}>{children}</div>}{error && <p id={`${id}-error`} className="mt-2 text-xs text-red-700">{error}</p>}</div>;
}

export const inputClassName = "h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-[#222] outline-none transition focus:border-[#C79A43] focus:ring-2 focus:ring-[#C79A43]/20";
