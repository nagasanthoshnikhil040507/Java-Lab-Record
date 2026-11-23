import { type ReactNode } from 'react';
import { Download, ChevronLeft, ChevronRight, FileText, CheckCircle2, Shield } from 'lucide-react';

interface WeekLayoutProps {
  weekNumber: number;
  title: string;
  pdfUrl?: string;
  category?: string;
  children: ReactNode;
  onNavigate?: (page: string) => void;
  prevWeek?: string;
  nextWeek?: string;
}

export default function WeekLayout({ 
  weekNumber, 
  title, 
  pdfUrl, 
  category = "Laboratory Experiment",
  children, 
  onNavigate, 
  prevWeek,
  nextWeek 
}: WeekLayoutProps) {
  return (
    <div className="min-h-full pb-20">
      {/* Top Academic Header Banner */}
      <div className="bg-white border-b border-slate-200/90 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          
          {/* Breadcrumb & Tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <button 
                onClick={() => onNavigate?.('home')}
                className="hover:text-emerald-700 transition-colors"
              >
                Lab Dossier
              </button>
              <span>/</span>
              <span className="text-slate-400">Week {weekNumber}</span>
              <span>/</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 font-medium">
                {category}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200">
              <Shield size={12} className="text-emerald-600" />
              <span>Record Certified: 24EU08154</span>
            </div>
          </div>

          {/* Title and Download CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white font-mono font-bold text-xs mb-3 tracking-wide shadow-xs">
                <span>EXPERIMENT #{String(weekNumber).padStart(2, '0')}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {title}
              </h1>
            </div>

            {pdfUrl && (
              <div className="flex-shrink-0">
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 group"
                >
                  <Download size={17} className="transition-transform group-hover:-translate-y-0.5" />
                  <span>{pdfUrl.toLowerCase().endsWith('.docx') ? 'Download Lab Record' : 'Download PDF Record'}</span>
                  <span className="text-[11px] font-mono px-1.5 py-0.5 bg-emerald-900/40 rounded text-emerald-100 font-normal">
                    {pdfUrl.toLowerCase().endsWith('.docx') ? 'DOCX' : 'PDF'}
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Metadata bar */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Student:</span>
              <span className="font-semibold text-slate-700">G Naga Santhosh Nikhil</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Department:</span>
              <span className="font-semibold text-slate-700">IT (III/IV B.Tech)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">Evaluation:</span>
              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                <CheckCircle2 size={13} className="text-emerald-600" />
                Verified & Completed
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-10 sm:space-y-12">
          {children}
        </div>

        {/* Experiment Pagination Footer */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevWeek && onNavigate ? (
            <button
              onClick={() => onNavigate(prevWeek)}
              className="w-full sm:w-auto inline-flex items-center gap-2.5 px-5 py-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all shadow-xs group"
            >
              <ChevronLeft size={18} className="text-slate-400 group-hover:-translate-x-0.5 transition-transform" />
              <span>Previous Experiment</span>
            </button>
          ) : <div />}

          <button
            onClick={() => onNavigate?.('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition-colors"
          >
            <FileText size={14} />
            <span>Return to Record Dossier</span>
          </button>

          {nextWeek && onNavigate ? (
            <button
              onClick={() => onNavigate(nextWeek)}
              className="w-full sm:w-auto inline-flex items-center justify-end gap-2.5 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-sm transition-all shadow-sm hover:shadow-md group"
            >
              <span>Next Experiment</span>
              <ChevronRight size={18} className="text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : <div />}
        </div>
      </main>
    </div>
  );
}
