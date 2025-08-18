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
        // click outside to close (ignore clicks inside the panel)
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
          className="absolute left-3 md:left-3 z-50 inline-flex items-center gap-2 rounded-full bg-white/90 p-2 text-black shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#2DCBE0]"
          aria-label="Close"
          style={{ top: "max(0.75rem, env(safe-area-inset-top))" }}
        >
          <CloseIcon />
        </button>

        {/* SCROLLABLE CONTENT */}
        <div className="max-h-[88vh] overflow-y-auto">
          {/* Logo */}
          {logoSrc && (
            <div className="flex justify-center pt-10 pb-4 px-6">
              <img
                src={logoSrc}
                alt="Logo"
                className="h-20 md:h-28 w-auto object-contain"
                loading="eager"
              />
            </div>
          )}

          {/* Title */}
          <h2
            id="location-modal-title"
            className="px-6 text-white text-center text-2xl font-semibold md:text-3xl"
          >
            {title}
          </h2>

          {/* Compact Areas under title */}
          <div className="mt-2 md:hidden px-6 text-center text-[11px] md:text-xs text-gray-300 space-y-1">
            {cities.map((c) =>
              c.areas ? (
                <p key={c.name} className="leading-snug">
                  <span className="font-semibold text-[#2DCBE0]">{c.name}:</span>{" "}
                  {c.areas}
                </p>
              ) : null
            )}
          </div>

          {/* Cities Grid */}
          <div className="px-8 md:px-10 py-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="group relative overflow-hidden rounded-xl shadow-md p-2 bg-[#1A1A1A]"
                >
                  {/* Image + overlays */}
                  <div className="relative">
                    <img
                      src={city.imageSrc}
                      alt={city.name}
                      className="h-64 sm:h-48 w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Centered name */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/65">
                      <p className="text-2xl font-semibold text-white drop-shadow-md text-center break-words whitespace-normal px-2">
                        {city.name}
                      </p>
                    </div>

                    {/* Book Online button */}
                    <a
                      href={city.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-3 right-3 font-bold rounded-sm bg-[#2DCBE0] uppercase px-4 py-2 text-md text-[#1e1e1e] shadow hover:bg-[#5E297F] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => {
                        // optional: close modal after click
                        onClose?.();
                      }}
                    >
                      Book Online
                    </a>
                  </div>

                  {/* Optional per-card areas (desktop only to save vertical space on mobile) */}
                  {city.areas && (
                    <div className="hidden md:block mt-6 mb-2 text-sm text-gray-200 text-start leading-snug break-words whitespace-normal px-4">
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
