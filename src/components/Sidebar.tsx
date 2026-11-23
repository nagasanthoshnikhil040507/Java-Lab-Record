import { Home, Terminal, Database, Server, Cpu, FileText, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { clsx } from 'clsx';
import { useEffect } from 'react';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  open: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { 
    id: 'home', 
    num: '00',
    label: 'Overview', 
    title: 'Lab Record Dossier',
    icon: Home, 
    badge: 'Hub'
  },
  { 
    id: 'week1', 
    num: '01',
    label: 'Week 1', 
    title: 'Java Architecture & Web Essentials',
    subtitle: 'Core vs Adv, Applets, Servlets, JDBC, ODBC',
    icon: FileText, 
    badge: 'Theory'
  },
  { 
    id: 'week2', 
    num: '02',
    label: 'Week 2', 
    title: 'OpenJDK & Oracle JDK 26',
    subtitle: 'Installation & Environment Setup on Ubuntu',
    icon: Terminal, 
    badge: 'Linux'
  },
  { 
    id: 'week3', 
    num: '03',
    label: 'Week 3', 
    title: 'MS Access (.accdb) & UCanAccess',
    subtitle: 'Type-4 JDBC Driver Database Connectivity',
    icon: Database, 
    badge: 'JDBC'
  },
  { 
    id: 'week4', 
    num: '04',
    label: 'Week 4', 
    title: 'MySQL Connection & Execution Types',
    subtitle: 'Statement, PreparedStatement, CallableStatement',
    icon: Server, 
    badge: 'MySQL'
  },
  { 
    id: 'week5', 
    num: '05',
    label: 'Week 5', 
    title: 'NetBeans IDE & MySQL JDBC',
    subtitle: 'Full NetBeans Workflow & Execution Captures',
    icon: Cpu, 
    badge: 'IDE'
  },
  { 
    id: 'week6', 
    num: '06',
    label: 'Week 6', 
    title: 'JDBC CRUD & Stored Procedures',
    subtitle: 'Comprehensive PreparedStatement & CallableStatement',
    icon: Database, 
    badge: 'CRUD'
  },
  { 
    id: 'week7', 
    num: '07',
    label: 'Week 7', 
    title: 'Java Servlet Programming',
    subtitle: 'HttpServlet, GenericServlet, Life-Cycle & Forms',
    icon: FileText, 
    badge: 'Servlets'
  },
  { 
    id: 'week8', 
    num: '08',
    label: 'Week 8', 
    title: 'Servlets with NetBeans & Tomcat',
    subtitle: 'HTTP Methods, JDBC, Order App & Dynamic Response',
    icon: Server, 
    badge: 'Tomcat'
  },
  { 
    id: 'week9', 
    num: '09',
    label: 'Week 9', 
    title: 'Maven in Spring Tool Suite (STS)',
    subtitle: 'Spring Boot Setup, pom.xml & JAR Build',
    icon: Cpu, 
    badge: 'Maven'
  },
  { 
    id: 'week10', 
    num: '10',
    label: 'Week 10', 
    title: 'JdbcTemplate with H2 Database',
    subtitle: 'Author Entity, Service, @PostConstruct & H2 Console',
    icon: Database, 
    badge: 'H2 DB'
  },
  { 
    id: 'week11', 
    num: '11',
    label: 'Week 11', 
    title: 'Spring JPA with H2 Database',
    subtitle: 'Student Entity, JpaRepository, REST API & Console',
    icon: Layers, 
    badge: 'JPA'
  },
  { 
    id: 'week12', 
    num: '12',
    label: 'Week 12', 
    title: 'JDBC with MySQL & Spring Boot',
    subtitle: 'Employee Entity, MySQL Datasource & REST Endpoint',
    icon: Database, 
    badge: 'MySQL'
  },
  { 
    id: 'week13', 
    num: '13',
    label: 'Week 13', 
    title: 'Spring JPA & Relational DB',
    subtitle: 'Employee Entity, MySQL, Thymeleaf HTML & REST API',
    icon: Layers, 
    badge: 'Relational'
  },
];

export default function Sidebar({ activePage, onNavigate, open, onClose }: SidebarProps) {
  // Prevent body scroll on mobile drawer
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={clsx(
          "fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Container */}
      <aside 
        className={clsx(
          "fixed md:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-slate-200/90 transform transition-transform duration-300 ease-in-out flex flex-col h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] md:h-full shadow-xl md:shadow-none top-16 sm:top-20 md:top-0",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
        aria-label="Lab Modules Navigation"
      >
        {/* Navigation Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
              Lab Modules
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
              <CheckCircle2 size={11} className="text-emerald-600" />
              13 / 13 Completed
            </span>
          </div>
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5 custom-scrollbar">
          {NAV_ITEMS.map(({ id, num, label, title, subtitle, icon: Icon, badge }) => {
            const isActive = activePage === id;
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={clsx(
                  "w-full text-left p-3 rounded-xl transition-all duration-200 group relative flex items-start gap-3 border",
                  isActive 
                    ? "bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-slate-900" 
                    : "bg-white hover:bg-slate-50 text-slate-700 border-slate-100 hover:border-slate-200"
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Number / Icon */}
                <div className={clsx(
                  "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold transition-colors",
                  isActive 
                    ? "bg-emerald-500 text-slate-950 shadow-xs" 
                    : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800"
                )}>
                  {num === '00' ? <Icon size={15} /> : num}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className={clsx(
                      "text-xs font-bold uppercase tracking-wider",
                      isActive ? "text-emerald-400" : "text-slate-400 group-hover:text-slate-600"
                    )}>
                      {label}
                    </span>
                    <span className={clsx(
                      "text-[10px] font-mono px-1.5 py-0.2 rounded border",
                      isActive 
                        ? "bg-white/10 text-slate-300 border-white/10" 
                        : "bg-slate-50 text-slate-500 border-slate-200/70"
                    )}>
                      {badge}
                    </span>
                  </div>
                  
                  <div className={clsx(
                    "text-xs font-semibold leading-snug line-clamp-1",
                    isActive ? "text-white" : "text-slate-800 group-hover:text-slate-900"
                  )}>
                    {title}
                  </div>

                  {subtitle && (
                    <div className={clsx(
                      "text-[11px] leading-tight mt-0.5 line-clamp-1",
                      isActive ? "text-slate-400" : "text-slate-500 group-hover:text-slate-600"
                    )}>
                      {subtitle}
                    </div>
                  )}
                </div>

                {/* Chevron */}
                <ChevronRight 
                  size={14} 
                  className={clsx(
                    "shrink-0 mt-2 transition-transform duration-200",
                    isActive 
                      ? "text-emerald-400 translate-x-0.5" 
                      : "text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5"
                  )} 
                />
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer Student Card */}
        <div className="p-3.5 border-t border-slate-200/80 bg-slate-50">
          <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center border border-emerald-200 shrink-0">
              SN
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-slate-900 truncate">G Naga Santhosh Nikhil</div>
              <div className="text-[11px] text-slate-500 font-mono">Reg: 24EU08154</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
