import { 
  ArrowRight, 
  BookOpen, 
  Terminal, 
  Database, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  GraduationCap, 
  Download,
  CheckCircle2,
  FileCode2
} from 'lucide-react';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

const WEEKS_DATA = [
  {
    id: 'week1',
    num: '01',
    title: 'Java Architecture & Web Essentials',
    summary: 'Detailed comparative study of Core Java vs Advanced Java, Applets lifecycle, Servlets architecture, JDBC vs ODBC, Cookies vs Sessions, Spring vs Spring Boot, and 5-language comparative matrix.',
    tags: ['Core vs Advanced Java', 'Servlets', 'Applets', 'JDBC vs ODBC', 'Language Matrix'],
    pdfUrl: '/records/Week1.pdf',
    icon: FileCode2
  },
  {
    id: 'week2',
    num: '02',
    title: 'Installation & Configuration of OpenJDK & Oracle JDK SE 26 on Ubuntu',
    summary: 'Complete system-level deployment of OpenJDK 21 and Oracle JDK SE 26 archive on Ubuntu Linux, environment variables configuration in /etc/profile, and update-alternatives setup.',
    tags: ['Ubuntu Linux', 'OpenJDK 21', 'Oracle JDK 26', 'Environment Variables'],
    pdfUrl: '/records/Week2.pdf',
    icon: Terminal
  },
  {
    id: 'week3',
    num: '03',
    title: 'Connecting MS Access Database (.accdb) using UCanAccess JDBC Driver',
    summary: 'Building a Java JDBC application to interface with Microsoft Access (.accdb) databases using the pure Java Type-4 UCanAccess driver with HSQLDB & Commons Logging dependencies.',
    tags: ['MS Access (.accdb)', 'UCanAccess Driver', 'HSQLDB', 'Type-4 JDBC'],
    pdfUrl: '/records/Week3.pdf',
    icon: Database
  },
  {
    id: 'week4',
    num: '04',
    title: 'MySQL Database Connections: Statement, PreparedStatement & CallableStatement',
    summary: 'Establishing MySQL connectivity with MySQL Connector/J 9.4.0, executing queries with Statement, parameter handling with PreparedStatement, and procedure execution.',
    tags: ['MySQL Server', 'Connector/J', 'Statement', 'PreparedStatement'],
    pdfUrl: '/records/Week4.pdf',
    icon: Database
  },
  {
    id: 'week5',
    num: '05',
    title: 'Java Application Connectivity with MySQL Database in NetBeans IDE',
    summary: 'End-to-end development in NetBeans IDE, WAMP server setup, creating IT database and employee tables, adding connector JARs, executing Java queries, and displaying employee records.',
    tags: ['NetBeans IDE', 'WAMP Server', 'MySQL JDBC', 'IDE Execution Captures'],
    pdfUrl: '/records/Week5.pdf',
    icon: Cpu
  },
  {
    id: 'week6',
    num: '06',
    title: 'JDBC CRUD Operations using MySQL Database',
    summary: 'Full CRUD implementation with multiple database entities (Person, Employee, Product, Department, Book), MySQL stored procedures, parameterized queries, and deletion routines.',
    tags: ['CRUD Operations', 'Stored Procedures', 'CallableStatement', 'PreparedStatement'],
    pdfUrl: '/records/Week6.pdf',
    icon: Layers
  },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-full pb-20">
      
      {/* Editorial Academic Hero */}
      <section className="bg-white border-b border-slate-200/90 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-6">
            <BookOpen size={13} className="text-emerald-700" />
            <span>Siddhartha Academy of Higher Education · Dept. of Information Technology</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Advanced Java Programming <br />
            <span className="text-emerald-700">Digital Laboratory Record</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal mb-8">
            An official certified record of weekly experiments, architectural paradigms, hands-on Linux and NetBeans workflows, database connectivity (UCanAccess & MySQL), and JDBC CRUD implementations for the academic curriculum.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-100">
            <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/80">
              <div className="text-xs font-medium text-slate-500">Modules Completed</div>
              <div className="text-xl font-bold text-slate-900 mt-0.5">6 of 6 Weeks</div>
            </div>
            <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/80">
              <div className="text-xs font-medium text-slate-500">Record Verification</div>
              <div className="text-xl font-bold text-emerald-700 mt-0.5 flex items-center gap-1">
                <CheckCircle2 size={18} />
                <span>100% Certified</span>
              </div>
            </div>
            <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/80">
              <div className="text-xs font-medium text-slate-500">Academic Year</div>
              <div className="text-xl font-bold text-slate-900 mt-0.5">2025–2026</div>
            </div>
            <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/80">
              <div className="text-xs font-medium text-slate-500">Course Level</div>
              <div className="text-xl font-bold text-slate-900 mt-0.5">III/IV B.Tech</div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Student Academic Identification Dossier */}
        <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-slate-100">
            
            {/* Student Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-4 ring-slate-100 border border-slate-200 shadow-sm bg-slate-100 flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="G Naga Santhosh Nikhil"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center text-white" title="Active Verified Candidate">
                <CheckCircle2 size={12} />
              </span>
            </div>

            {/* Student Details Header */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2.5 mb-1">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  G Naga Santhosh Nikhil
                </h2>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <ShieldCheck size={13} className="text-emerald-700" />
                  24EU08154
                </span>
              </div>
              <p className="text-sm font-medium text-slate-600">
                Department of Information Technology · Section IT-C
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Siddhartha Academy of Higher Education (Deemed to be University)
              </p>
            </div>

          </div>

          {/* Detailed Academic Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 pt-6 text-sm">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Program of Study</span>
              <span className="font-semibold text-slate-800">Bachelor of Technology (B.Tech)</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Discipline</span>
              <span className="font-semibold text-slate-800">Information Technology</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Semester / Year</span>
              <span className="font-semibold text-slate-800">IV Semester · III Year</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Laboratory Course</span>
              <span className="font-semibold text-slate-800">Advanced Java Programming Lab</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Candidate Registration</span>
              <span className="font-mono font-semibold text-emerald-700">24EU08154</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Status</span>
              <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs">
                <CheckCircle2 size={14} /> Full Record Submitted & Verified
              </span>
            </div>
          </div>
        </section>

        {/* Academic Journey: Weekly Experiments Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Curriculum Experiments & Records
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                Select any laboratory module to view complete aims, procedures, code, outputs, and official PDF downloads.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WEEKS_DATA.map((week) => {
              const Icon = week.icon;
              return (
                <div
                  key={week.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Top */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                          {week.num}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <Icon size={14} className="text-emerald-600" />
                          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                            Week {week.num}
                          </span>
                        </div>
                      </div>

                      <a
                        href={week.pdfUrl}
                        download
                        title="Download Original PDF"
                        className="p-1.5 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-emerald-700 border border-slate-200/80 transition-colors"
                      >
                        <Download size={14} />
                      </a>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors mb-2">
                      {week.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {week.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {week.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Open Button */}
                  <button
                    onClick={() => onNavigate?.(week.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white font-semibold text-xs sm:text-sm border border-slate-200/80 transition-all duration-200 group-hover:border-slate-900 shadow-2xs"
                  >
                    <span>Inspect Week {week.num} Record</span>
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technologies & Environments Matrix */}
        <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-card">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <GraduationCap size={18} className="text-emerald-700" />
            <span>Technologies & Tools Implemented</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: 'Java JDK 21 / 26', desc: 'Core Platform' },
              { name: 'Ubuntu Linux', desc: 'OS Environment' },
              { name: 'MySQL Server', desc: 'RDBMS Engine' },
              { name: 'Apache NetBeans', desc: 'Development IDE' },
              { name: 'UCanAccess', desc: 'MS Access JDBC' },
              { name: 'WAMP Server', desc: 'Local Web Stack' },
            ].map((tool, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <div className="text-xs font-bold text-slate-900">{tool.name}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{tool.desc}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
