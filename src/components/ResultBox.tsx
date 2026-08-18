import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';
import { type ReactNode } from 'react';

interface ResultBoxProps {
  children: ReactNode;
  className?: string;
}

export default function ResultBox({ children, className }: ResultBoxProps) {
  return (
    <div className={clsx(
      "mt-8 rounded-2xl border border-emerald-300/80 bg-gradient-to-br from-emerald-50/90 via-emerald-50/40 to-white p-6 sm:p-7 shadow-xs relative overflow-hidden",
      className
    )}>
      {/* Decorative watermark / seal accent */}
      <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-36 h-36 rounded-full bg-emerald-100/40 pointer-events-none blur-xl" />

      <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
        {/* Verification Icon Badge */}
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
          <CheckCircle2 size={24} />
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Result & Verification</span>
            </h3>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              <ShieldCheck size={12} className="text-emerald-700" />
              Verified Laboratory Outcome
            </span>
          </div>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
