import { useState } from "react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import flyerImage from "../../assets/flyer.jpeg";

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1706670368974-af427a98e816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGJhdGhyb29tJTIwc2hvd2VyJTIwZGl2aXNpb258ZW58MXx8fHwxNzcyNTYyNDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'División de baño en vidrio templado',
    category: 'Divisiones de Baño',
  },
  {
    src: 'https://images.unsplash.com/photo-1634275560771-9c88af5afdbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGZhY2FkZSUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI1MzUzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Fachada en vidrio',
    category: 'Fachadas',
  },
  {
    src: 'https://images.unsplash.com/photo-1659991147507-743a51706cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMHdpbmRvdyUyMGZyYW1lcyUyMG1vZGVybiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MjU2MjQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Ventanería en aluminio',
    category: 'Ventanería',
  },
  {
    src: 'https://images.unsplash.com/photo-1758555225985-2274259e1c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBtaXJyb3IlMjBiYXRocm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NzI1NjI0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Espejo con luz LED',
    category: 'Espejos LED',
  },
];

export default function Gallery() {

  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [lightboxImage, setLightboxImage] = useState<any>(null);

  const categories = [
    "Todos",
    ...Array.from(new Set(galleryImages.map(img => img.category)))
  ];

  const filteredImages =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 lg:py-28" style={{ background: '#080e14' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITULO */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 tracking-[0.3em] mb-3 text-xs">
            NUESTRO TRABAJO
          </p>

          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Galería de Proyectos
          </h2>

          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mb-8" />
        </div>


        {/* BARRA DE CATEGORIAS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">

          {categories.map(cat => (

            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}

              className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-300
              ${selectedCategory === cat
                  ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                  : "border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-white"
                }`}
            >
              {cat}

            </button>

          ))}

        </div>


        {/* GRID DE IMAGENES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {filteredImages.map((img) => (

            <div
              key={img.alt}
              onClick={() => setLightboxImage(img)}
              className="group relative rounded-xl overflow-hidden aspect-[16/10] cursor-pointer"
            >

              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* texto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">

                <span className="text-cyan-400 text-xs tracking-wider">
                  {img.category}
                </span>

                <p className="text-white mt-1">
                  {img.alt}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* FLYER EMPRESA */}
        <div className="flex justify-center mt-12">

          <div className="relative max-w-sm w-full overflow-hidden rounded-2xl border border-gray-800 hover:border-cyan-500/40 transition-all duration-500 group">

            {/* SOMBRA SUPERIOR tipo rollo */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none"></div>

            {/* CONTENEDOR DESENROLLABLE */}
            <div className="max-h-28 group-hover:max-h-[700px] transition-all duration-700 ease-in-out">

              <img
                src={flyerImage}
                alt="Arquitectónicos In House - Servicios"
                className="w-full h-auto object-cover select-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />

            </div>

          </div>

        </div>


        {/* LIGHTBOX */}
        {lightboxImage && (

          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            onClick={() => setLightboxImage(null)}
          >

            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />

          </div>

        )}

      </div>

    </section>
  );
}