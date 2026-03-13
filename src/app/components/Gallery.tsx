import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import flyerImage from "../../assets/flyer.jpeg";

import Division from "../../assets/Gallery/Divisiones/division-2.jpg";
import Espejo from "../../assets/Gallery/Espejos LED/LED-1.jpg";
import aluminio from "../../assets/Gallery/Ventaneria/Aluminio.jpeg";
import Fachada from "../../assets/Gallery/Fachadas/Fachada.jpg";


/* IMÁGENES DESTACADAS (LAS 4 PRINCIPALES) */

const featuredImages = [
  {
    src: Division,
    alt: "División de baño en vidrio templado",
    category: "Divisiones de Baño",
  },
  {
    src: Fachada,
    alt: "Fachada en vidrio arquitectónico",
    category: "Fachadas",
  },
  {
    src: aluminio,
    alt: "Ventanería en aluminio",
    category: "Ventanería",
  },
  {
    src: Espejo,
    alt: "Espejo con luz LED",
    category: "Espejos LED",
  },
];


/* IMPORTACIÓN AUTOMÁTICA DE TODAS LAS IMÁGENES */

const imageModules = import.meta.glob(
  "../../assets/Gallery/**/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);


const autoImages = Object.entries(imageModules).map(([path, src]) => {

  const parts = path.split("/");
  const fileName = parts[parts.length - 1];
  const category = parts[parts.length - 2];

  const cleanName = fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ");

  return {
    src: src as string,
    alt: cleanName,
    category,
  };

});


/* UNIR IMÁGENES DESTACADAS + AUTOMÁTICAS */

const galleryImages = [...featuredImages, ...autoImages];



export default function Gallery() {

  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [lightboxImage, setLightboxImage] = useState<any>(null);


  /* GENERAR CATEGORÍAS */

  const categories = [
    "Todos",
    ...Array.from(new Set(galleryImages.map(img => img.category)))
  ];


  /* FILTRAR IMÁGENES */

  const filteredImages =
    selectedCategory === "Todos"
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);



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



        {/* BARRA DE CATEGORÍAS */}

        <div className="flex flex-wrap justify-center gap-4 mb-14">

          {categories.map(cat => (

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



        {/* GRID DE IMÁGENES */}

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

              {/* OVERLAY OSCURO */}

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />



              {/* TEXTO */}

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

          <div className="relative max-w-sm w-full group">

            {/* ROLLO SUPERIOR */}

            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-300 to-gray-100 rounded-t-xl shadow-md z-20"></div>



            {/* CONTENEDOR */}

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