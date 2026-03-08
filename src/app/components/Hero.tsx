import logo from "../../assets/logopage.png";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

return (
  <section
    className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4"
    style={{
      background:
        "radial-gradient(ellipse at 50% 30%, #0a2a3a 0%, #050d14 60%, #020508 100%)",
    }}
  >
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute top-1/4 -right-20 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full opacity-8"
        style={{
          background: "radial-gradient(circle, #0891b2 0%, transparent 70%)",
        }}
      />
    </div>

    {/* CONTENIDO PRINCIPAL */}
    <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

      {/* Imagen */}
      <div className="relative mt-24 mb-14">
        <img
          src={logo}
          alt="Arquitectónicos In House"
          className="w-80 sm:w-96 md:w-[460px] opacity-95"
        />

      </div>

      {/* Título con animación */}
      <h1 className="shine-text text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
      ARQUITECTÓNICOS
     </h1>

      <h2 className="text-2xl md:text-3xl text-gray-300 tracking-widest mt-4">
        IN HOUSE
      </h2>

      {/* Eslogan */}
      <p className="text-cyan-200 text-lg md:text-xl font-semibold tracking-widest mt-8 mb-10">
        INNOVACIÓN QUE ILUMINA TU ESPACIO
      </p>

      {/* Subtítulo en 3 líneas ordenadas */}
      <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
        Somos una empresa colombiana especializada en divisiones de baño <br />
        ventanería en aluminio y acabados arquitectónicos de alta calidad <br />
        para profesionales de la construcción y remodelación.
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        <button
          onClick={() => handleScroll("#servicios")}
          className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 px-8 py-3.5 rounded-full transition-all duration-300 tracking-wide hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Nuestros Servicios
        </button>

        <a
          href="https://wa.me/573122271701"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3.5 rounded-full transition-all duration-300 tracking-wide"
        >
          Contactar por WhatsApp
        </a>
      </div>

      {/* Flecha debajo de los botones */}
      <button
        onClick={() => handleScroll("#servicios")}
        className="text-gray-500 hover:text-cyan-400 transition-colors"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-bounce"
        >
          <path d="M7 13l5 5 5-5" />
        </svg>
      </button>
    </div>
  </section>
);
}
