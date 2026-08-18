import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import { Bookmark } from 'lucide-react';

interface SectionProps {
  title?: string;
  badge?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

export default function Section({ title, badge, children, className, titleClassName }: SectionProps) {
  return (
    <section className={clsx(
      "bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-8 transition-all hover:shadow-card-hover scroll-mt-24",
      className
    )}>
      {title && (
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
          <h2 className={clsx(
            "text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5",
            titleClassName
          )}>
            <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" aria-hidden="true" />
            {title}
          </h2>

          {badge && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              <Bookmark size={11} className="text-slate-400" />
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
        {children}
      </div>
    </section>
  );
}
