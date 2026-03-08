export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573122271701"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all duration-300 group"
      style={{ padding: '14px 18px' }}
      aria-label="Contactar por WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7 flex-shrink-0"
      >
        <path d="M16.004 0C7.165 0 0 7.163 0 16.001c0 2.82.737 5.574 2.137 7.998L.074 32l8.204-2.033A15.94 15.94 0 0016.004 32C24.838 32 32 24.837 32 16.001 32 7.163 24.838 0 16.004 0zm0 29.314a13.27 13.27 0 01-7.171-2.092l-.514-.306-5.33 1.322 1.346-5.185-.335-.531A13.235 13.235 0 012.69 16.001c0-7.348 5.975-13.316 13.314-13.316 7.342 0 13.312 5.968 13.312 13.316 0 7.347-5.97 13.313-13.312 13.313zm7.306-9.972c-.4-.2-2.367-1.168-2.734-1.302-.367-.133-.634-.2-.9.2-.267.4-1.034 1.302-1.268 1.568-.233.267-.467.3-.867.1s-1.689-.623-3.217-1.986c-1.189-1.06-1.991-2.37-2.224-2.77-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.234.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.168-1.233-2.968-.325-.78-.655-.674-.9-.687l-.767-.012c-.267 0-.7.1-1.067.5-.367.4-1.4 1.368-1.4 3.336 0 1.968 1.434 3.868 1.634 4.135.2.267 2.822 4.31 6.838 6.043.955.413 1.7.659 2.281.844.958.305 1.832.262 2.522.159.769-.115 2.367-.968 2.7-1.902.334-.934.334-1.735.234-1.902-.1-.167-.367-.267-.767-.467z" />
      </svg>
      <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-40 transition-all duration-300 whitespace-nowrap" style={{ fontSize: '0.85rem' }}>
        Escríbenos
      </span>
    </a>
  );
}
