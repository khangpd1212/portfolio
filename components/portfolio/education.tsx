import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="px-6 py-12 lg:px-0">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 rounded-lg bg-card p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <GraduationCap size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              FPT Polytechnic College
            </h3>
            <p className="text-sm text-muted-foreground">
              Graduated with Good Degree in Website Programming
            </p>
            <p className="font-mono text-xs text-primary/70">2019 - 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
}
