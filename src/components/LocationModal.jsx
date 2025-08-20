import React, { useEffect, useRef } from "react";

const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationModal = ({
  isOpen,
  onClose,
  logoSrc,
  title = "Select The Location Where You Would Like to Book",
  cities = [], // [{ name, imageSrc, bookingUrl, areas }]
}) => {
  const dialogRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = original);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-[92vw] max-w-4xl max-h-[92vh] rounded-2xl bg-[#0F0F0F] text-gray-900 shadow-xl overflow-hidden"
      >
      {/* Close - always visible, safe-area aware */}
<button
  onClick={onClose}
  className="absolute left-3 md:left-3 z-50 inline-flex items-center gap-2 
             rounded-full bg-white/90 p-1.5 md:p-2 text-black shadow 
             hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#2DCBE0]"
  aria-label="Close"
  style={{ top: "max(0.50rem, env(safe-area-inset-top))" }}
>
  <CloseIcon className="w-4 h-4 md:w-6 md:h-6" />
</button>

        {/* SCROLLABLE CONTENT */}
        <div className="max-h-[88vh] overflow-y-auto">
          {/* Logo (HIDDEN on mobile, visible md+) */}
          {logoSrc && (
            <div className="hidden md:flex justify-center pt-10 pb-4 px-6">
              <img
                src={logoSrc}
                alt="Logo"
                className="h-20 w-auto object-contain"
                loading="eager"
              />
            </div>
          )}

          {/* Title with top padding on mobile */}
          <h2
            id="location-modal-title"
            className="pt-4 md:pt-0 px-4 md:px-6 text-white text-center text-xl md:text-3xl font-semibold"
          >
            {title}
          </h2>

          {/* Cities Grid */}
          <div className="px-4 md:px-10 py-4 md:py-10">
            <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2">
              {cities.map((city) => (
                <div key={city.name}>
                  {/* Card */}
                  <div className="group relative overflow-hidden rounded-xl shadow-md p-2 bg-[#1A1A1A] h-[38vh] md:h-auto">
                    {/* Image wrapper fills card on mobile */}
                    <div className="relative h-full md:h-auto rounded-lg overflow-hidden">
                      <img
                        src={city.imageSrc}
                        alt={city.name}
                        className="w-full h-full md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Centered name */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/65">
                        <p className="text-2xl md:text-2xl font-semibold text-white drop-shadow-md text-center break-words whitespace-normal px-2">
                          {city.name}
                        </p>
                      </div>

                      {/* Book Online button */}
                      <a
                        href={city.bookingUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute bottom-3 right-3 font-bold rounded-sm bg-[#2DCBE0] uppercase px-4 py-2 text-md text-[#1e1e1e] shadow hover:bg-[#5E297F] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => onClose?.()}
                      >
                        Book Online
                      </a>
                    </div>
                  </div>

                 {/* Mobile dropdown for this county (UNDER the card) */}
{city.areas && (
  <details className="md:hidden group border border-white/10 rounded-lg mt-2 overflow-hidden">
    <summary className="flex items-center justify-between cursor-pointer select-none bg-white/5 px-3 py-2 text-[12px] text-gray-200">
      <span className="font-semibold text-[#2DCBE0]">
        {city.name} Area Serviced
      </span>
      <span className="ml-2 text-gray-300 group-open:rotate-180 transition-transform">
        ▼
      </span>
    </summary>
    <div className="px-3 py-2 text-[11px] text-gray-300 leading-snug space-y-3">
      <p>{city.areas}</p>

      {/* Book Now button (mobile dropdown) */}
      <div className="flex justify-end">
        <a
          href={city.bookingUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => onClose?.()}
          className="inline-block rounded-sm bg-[#2DCBE0] px-3 py-1.5 uppercase text-[11px] font-bold text-[#1e1e1e] shadow hover:bg-[#5E297F] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Book Now
        </a>
      </div>
    </div>
  </details>
)}

                  {/* Desktop per-card areas (unchanged) */}
                  {city.areas && (
                    <div className="hidden md:block mt-6 mb-2 text-sm text-gray-200 text-start leading-snug break-words whitespace-normal px-1">
                      {city.areas}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* /SCROLLABLE CONTENT */}
      </div>
    </div>
  );
};

export default LocationModal;
