import { Menu, X, BookOpen, GraduationCap, Award, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function Header({ sidebarOpen, onToggleSidebar }: HeaderProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs flex-shrink-0 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Left section: Mobile Toggle + Student Avatar + Info */}
          <div className="flex items-center gap-3.5 min-w-0">
            {/* Mobile menu button */}
            <button
              onClick={onToggleSidebar}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              aria-label="Toggle navigation menu"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Profile Avatar with subtle luxury ring */}
            <div className="relative flex-shrink-0 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-emerald-600/30 p-0.5 bg-gradient-to-br from-emerald-50 to-slate-100 shadow-sm flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="G Naga Santhosh Nikhil"
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-300 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-900 text-emerald-400 font-bold rounded-full flex items-center justify-center text-sm tracking-wider">
                    SN
                  </div>
                )}
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full shadow-xs" title="Official Student Record" />
            </div>

            {/* Student metadata */}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold text-slate-900 truncate tracking-tight">
                  G Naga Santhosh Nikhil
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  <ShieldCheck size={12} className="text-emerald-600" />
                  24EU08154
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 truncate mt-0.5 font-medium">
                <GraduationCap size={13} className="text-slate-400 flex-shrink-0" />
                <span>III/IV B.Tech IT-C</span>
                <span className="text-slate-300">·</span>
                <span className="truncate">Department of Information Technology</span>
              </div>
            </div>
          </div>

          {/* Right section: University Branding & Subject Badge */}
          <div className="flex flex-col items-end text-right flex-shrink-0">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-emerald-700">
              <Award size={13} className="text-emerald-600" />
              <span>Siddhartha Academy of Higher Education</span>
            </div>
            <h1 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight mt-0.5 flex items-center gap-1.5">
              <BookOpen size={14} className="text-slate-400 hidden sm:inline" />
              Advanced Java Programming <span className="font-normal text-slate-500 hidden md:inline">Lab Record</span>
            </h1>
            <div className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Academic Year 2025–2026
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
