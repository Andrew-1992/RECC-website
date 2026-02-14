// src/components/layout/Section.tsx
import { ReactNode } from "react";

// This utility function helps merge Tailwind classes safely
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({ children, className, id, dark = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-20 md:py-32 px-6", // Standardized padding for the whole site
        dark ? "bg-brand-black text-white" : "bg-white text-brand-black",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}