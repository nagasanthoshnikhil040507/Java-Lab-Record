import { useState, useEffect } from 'react';
import { ZoomIn, X, Image as ImageIcon } from 'lucide-react';
import { clsx } from 'clsx';

interface ScreenshotFigureProps {
  src: string;
  alt: string;
  caption?: string;
  figNum?: string;
  className?: string;
}

export default function ScreenshotFigure({ 
  src, 
  alt, 
  caption, 
  figNum, 
  className 
}: ScreenshotFigureProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Keyboard escape listener to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsZoomed(false);
    };
    if (isZoomed) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isZoomed]);

  if (hasError) return null; // Gracefully omit missing image per rules

  return (
    <>
      <figure className={clsx("my-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50/70 p-3 sm:p-4 shadow-sm group", className)}>
        
        {/* Figure Header Bar */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200/80 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-1.5 font-mono">
            <ImageIcon size={13} className="text-emerald-600" />
            <span className="uppercase tracking-wider text-[11px] text-slate-600">
              {figNum || 'Laboratory Record Capture'}
            </span>
          </div>
          <span className="text-[11px] text-slate-400 font-normal">
            Click to Enlarge
          </span>
        </div>

        {/* Screenshot Container */}
        <div 
          onClick={() => setIsZoomed(true)}
          className="relative rounded-xl overflow-hidden bg-white border border-slate-200/80 cursor-pointer shadow-xs transition-all duration-200 hover:border-emerald-300 hover:shadow-md"
        >
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            className="w-full h-auto max-h-[520px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />

          {/* Hover Zoom pill */}
          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold shadow-lg">
              <ZoomIn size={14} />
              <span>Click to view full image</span>
            </div>
          </div>
        </div>

        {/* Figure Caption */}
        {caption && (
          <figcaption className="mt-3 text-center text-xs sm:text-sm font-medium text-slate-600 px-2 flex items-center justify-center gap-2">
            <span className="font-semibold text-slate-900">{caption}</span>
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          {/* Close CTA */}
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Close image viewer"
          >
            <X size={22} />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            {caption && (
              <div className="mt-4 px-4 py-2 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-sm text-center font-medium shadow-lg">
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
