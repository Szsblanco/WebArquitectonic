import { ImageWithFallback } from './figma/ImageWithFallback';
import cerrajeriaImage from "../../assets/cerrajeria.jpeg";
const services = [
  {
    title: 'Divisiones de Baño',
    description: 'Diseños modernos con vidrio templado y acabados premium. Divisiones corredizas, batientes y fijas.',
    image: 'https://images.unsplash.com/photo-1706670368974-af427a98e816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGJhdGhyb29tJTIwc2hvd2VyJTIwZGl2aXNpb258ZW58MXx8fHwxNzcyNTYyNDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Ventanería en Aluminio',
    description: 'Fabricación e instalación de ventanas de alta calidad. Sistemas corredizos, proyectantes y fijos.',
    image: 'https://images.unsplash.com/photo-1659991147507-743a51706cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMHdpbmRvdyUyMGZyYW1lcyUyMG1vZGVybiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MjU2MjQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Fachadas en Vidrio',
    description: 'Fachadas flotantes y sistemas de vidrio para edificaciones modernas con estética impecable.',
    image: 'https://images.unsplash.com/photo-1634275560771-9c88af5afdbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGZhY2FkZSUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI1MzUzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Barandas en Acero Inoxidable',
    description: 'Barandas de diseño contemporáneo en acero inoxidable para balcones, escaleras y terrazas.',
    image: 'https://images.unsplash.com/photo-1713778995985-f8039a45697d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMHJhaWxpbmclMjBiYWxjb255JTIwbW9kZXJufGVufDF8fHx8MTc3MjU2MjQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Espejos Luz LED',
    description: 'Espejos con iluminación LED integrada para baños y espacios modernos. Diseños personalizados.',
    image: 'https://images.unsplash.com/photo-1758555225985-2274259e1c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBtaXJyb3IlMjBiYXRocm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NzI1NjI0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Puertas de Seguridad',
    description: 'Puertas de seguridad y templadas. Protección y estilo para hogares y edificaciones comerciales.',
    image: 'https://images.unsplash.com/photo-1742715362964-205d6b341b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGRvb3IlMjB0ZW1wZXJlZCUyMGdsYXNzJTIwZW50cmFuY2V8ZW58MXx8fHwxNzcyNTYyNDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Marquesinas en Policarbonato',
    description: 'Cubiertas y marquesinas en policarbonato para protección y estilo arquitectónico.',
    image: 'https://images.unsplash.com/photo-1752859693618-cb5216473c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2x5Y2FyYm9uYXRlJTIwY2Fub3B5JTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MjU2MjQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Cerrajería a Domicilio',
    description: 'Servicio profesional de cerrajería. Instalación, reparación y apertura de cerraduras.',
    image: cerrajeriaImage}

];

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28" style={{ background: '#080e14' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-[0.3em] mb-3" style={{ fontSize: '0.8rem' }}>
            LO QUE HACEMOS
          </p>
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ lineHeight: '1.8' }}>
            Somos una empresa colombiana enfocada en la remodelación y construcción con
            soluciones integrales para profesionales del sector.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white mb-2" style={{ fontSize: '1rem' }}>
                  {service.title}
                </h3>
                <p className="text-gray-400" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/20 rounded-xl pointer-events-none transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Additional services list */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">También ofrecemos:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['PVC', 'Fachadas Flotantes', 'Vidrio Templado', 'Acero Inoxidable'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                style={{ fontSize: '0.85rem' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
