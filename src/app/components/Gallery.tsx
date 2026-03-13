import { useState, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import flyerImage from "../../assets/flyer.jpeg";

import Division from "../../assets/Gallery/Divisiones/division-2.jpg";
import Espejo from "../../assets/Gallery/Espejos LED/LED-1.jpg";
import aluminio from "../../assets/Gallery/Ventaneria/Aluminio.jpeg";
import Fachada from "../../assets/Gallery/Fachadas/Fachada.jpg";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const featuredImages: GalleryImage[] = [
  {
    src: Division,
    alt: "División de baño en vidrio templado",
    category: "Divisiones",
  },
  {
    src: Fachada,
    alt: "Fachada en vidrio arquitectónico",
    category: "Fachadas",
  },
  {
    src: aluminio,
    alt: "Ventanería en aluminio",
    category: "Ventaneria",
  },
  {
    src: Espejo,
    alt: "Espejo con luz LED",
    category: "Espejos LED",
  },
];

const imageModules = import.meta.glob(
  "../../assets/Gallery/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

const featuredSrc = new Set(featuredImages.map((img) => img.src));

const autoImages: GalleryImage[] = Object.entries(imageModules)
  .map(([path, src]) => {
    if (featuredSrc.has(src)) return null;

    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const category = parts[parts.length - 2];

    const cleanName = fileName
      .replace(/\.[^/.]+$/, "")
      .replace(/[-_]/g, " ");

    return {
      src,
      alt: cleanName,
      category,
    };
  })
  .filter((img): img is GalleryImage => img !== null);

const galleryImages: GalleryImage[] = [...featuredImages, ...autoImages];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const categories = [
    "Todos",
    ...Array.from(new Set(galleryImages.map((img) => img.category))),
  ];

  const filteredImages =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (lightboxIndex === null) return;

    const distance = touchStart.current - touchEnd.current;

    if (distance > 50) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }

    if (distance < -50) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  return (
    <section
      id="galeria"
      className="py-20 lg:py-28"
      style={{ background: "#080e14" }}
    >
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

        {/* CATEGORÍAS */}

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-300
              ${
                selectedCategory === cat
                  ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20"
                  : "border border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GALERÍA */}

<div className="columns-1 sm:columns-2 gap-6 mb-12 lg:grid lg:grid-cols-2 lg:gap-6">

  {filteredImages.map((img, index) => (

    <div
      key={index}
      onClick={() => setLightboxIndex(index)}
      className="mb-6 break-inside-avoid group cursor-pointer"
    >

      <div className="relative overflow-hidden rounded-xl">

        <ImageWithFallback
          src={img.src}
          alt={img.alt}
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* titulo */}

        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

          <p className="text-white font-bold text-lg drop-shadow-md">
            {img.alt}
          </p>

        </div>

      </div>

    </div>

  ))}

</div>

        {/* FLYER */}

        <div className="flex justify-center mt-12">

          <div className="relative max-w-sm w-full group">

            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-300 to-gray-100 rounded-t-xl shadow-md z-20"></div>

            <div className="overflow-hidden rounded-xl border border-gray-800 hover:border-cyan-500/40 transition-all duration-500">

              <div className="max-h-0 group-hover:max-h-[700px] transition-all duration-700 ease-in-out">

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

        </div>

        {/* LIGHTBOX */}

        {lightboxIndex !== null && (

          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => setLightboxIndex(null)}
          >

            <img
              src={filteredImages[lightboxIndex].src}
              alt=""
              className="max-h-[95vh] max-w-[95vw] object-contain select-none"
            />

          </div>

        )}

      </div>
    </section>
  );
}