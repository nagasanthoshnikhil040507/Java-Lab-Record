import { useState } from 'react';
import { Copy, Check, Terminal, Code2, FileCode, CheckCircle } from 'lucide-react';
import { clsx } from 'clsx';

interface CodeBlockProps {
  language?: 'java' | 'sql' | 'terminal' | 'bash' | 'output' | string;
  code: string;
  showLineNumbers?: boolean;
  title?: string;
  className?: string;
}

export default function CodeBlock({ 
  language = 'java', 
  code, 
  showLineNumbers = true, 
  title,
  className 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const lines = code.trim().split('\n');
  const lang = language.toLowerCase();
  const isTerminal = lang === 'bash' || lang === 'terminal';
  const isOutput = lang === 'output';
  const isSQL = lang === 'sql';
  const isJava = lang === 'java';

  return (
    <div className={clsx("my-5 rounded-xl overflow-hidden border border-slate-800 bg-[#0f172a] shadow-md font-mono text-xs sm:text-sm", className)}>
      {/* Top IDE Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e293b]/90 border-b border-slate-700/80 select-none">
        <div className="flex items-center gap-3">
          {/* Mac-style Window Controls */}
          <div className="flex gap-1.5 items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          <div className="flex items-center gap-2 text-slate-300 font-semibold text-xs tracking-tight">
            {isTerminal && <Terminal size={14} className="text-emerald-400" />}
            {isOutput && <CheckCircle size={14} className="text-teal-400" />}
            {isJava && <Code2 size={14} className="text-amber-400" />}
            {isSQL && <FileCode size={14} className="text-sky-400" />}
            
            <span>{title || (isTerminal ? 'Ubuntu Linux Terminal' : isOutput ? 'Execution Console Output' : `${language.toUpperCase()} Source`)}</span>
          </div>
        </div>

        {/* Right Metadata & Copy CTA */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-slate-400 font-normal hidden sm:inline">
            {lines.length} {lines.length === 1 ? 'line' : 'lines'}
          </span>
          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className={clsx(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all focus:outline-none focus:ring-1 focus:ring-emerald-400",
              copied 
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" 
                : "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700"
            )}
            aria-label="Copy source code"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Code Text Content */}
      <div className="p-4 overflow-x-auto leading-relaxed text-slate-200 custom-scrollbar">
        <pre className="font-mono">
          {lines.map((line, idx) => (
            <div key={idx} className="table-row hover:bg-slate-800/40 transition-colors">
              {showLineNumbers && !isTerminal && !isOutput && (
                <span className="table-cell select-none pr-4 text-right text-slate-600 text-xs w-8">
                  {idx + 1}
                </span>
              )}
              {isTerminal && (
                <span className="table-cell select-none pr-3 text-emerald-400 text-xs w-5 font-bold">
                  $
                </span>
              )}
              <span className={clsx(
                "table-cell whitespace-pre",
                isOutput && "text-emerald-300 font-medium",
                isTerminal && line.startsWith('sudo') && "text-amber-200 font-semibold"
              )}>
                {line || ' '}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
