import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Award, Users, Clock } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Garantía',
    description: 'Todos nuestros trabajos cuentan con garantía de calidad y satisfacción.',
  },
  {
    icon: Award,
    title: 'Experiencia',
    description: 'Años de trayectoria en el sector de acabados arquitectónicos.',
  },
  {
    icon: Users,
    title: 'Empresa Familiar',
    description: 'Valores familiares que se reflejan en la atención personalizada a cada cliente.',
  },
  {
    icon: Clock,
    title: 'Cumplimiento',
    description: 'Comprometidos con los tiempos de entrega y la excelencia en cada proyecto.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28" style={{ background: '#0a1218' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768321916992-ba11973088a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBmaW5pc2hpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI1NjI0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Arquitectónicos In House - Equipo"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-cyan-500/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-cyan-400 tracking-[0.3em] mb-3" style={{ fontSize: '0.8rem' }}>
              SOBRE NOSOTROS
            </p>
            <h2 className="text-3xl sm:text-4xl text-white mb-6">
              Empresa Familiar de Confianza
            </h2>
            <div className="w-16 h-0.5 bg-cyan-400 mb-8" />

            <p className="text-gray-300 mb-6" style={{ lineHeight: '1.9' }}>
              <strong className="text-white">Arquitectónicos In House</strong> es una empresa
              colombiana con amplia experiencia en el sector de acabados de construcción.
              Nos especializamos en brindar soluciones de calidad para arquitectos,
              remodeladores y constructoras que buscan excelencia y garantía en cada proyecto.
            </p>
            <p className="text-gray-400 mb-8" style={{ lineHeight: '1.9' }}>
              Nuestro compromiso con la innovación y la calidad nos ha posicionado como
              referentes en divisiones de baño, ventanería en aluminio, fachadas en vidrio
              y cerrajería profesional. Cada proyecto refleja nuestros valores familiares
              de honestidad, dedicación y servicio al cliente.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1" style={{ fontSize: '0.95rem' }}>
                      {title}
                    </h4>
                    <p className="text-gray-400" style={{ fontSize: '0.82rem', lineHeight: '1.5' }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
