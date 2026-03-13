import { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const text = `Hola, soy ${formData.name}. Me interesa el servicio de: ${formData.service}. ${formData.message}. Mi teléfono: ${formData.phone}, Email: ${formData.email}`;
    const waUrl = `https://wa.me/573122271701?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28" style={{ background: '#0a1218' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-[0.3em] mb-3" style={{ fontSize: '0.8rem' }}>
            CONTÁCTANOS
          </p>
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Solicita tu Cotización
          </h2>
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contáctanos y recibe una cotización personalizada para tu proyecto.
            Estaremos encantados de atenderte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-white mb-6">Información de Contacto</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400" style={{ fontSize: '0.8rem' }}>Teléfono / WhatsApp</p>
                    <a
                      href="https://wa.me/573122271701"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      312-227-1701
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400" style={{ fontSize: '0.8rem' }}>Email</p>
                    <p className="text-white">Arquitectonicoinhouse@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Globe size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400" style={{ fontSize: '0.8rem' }}>Sitio Web</p>
                    <p className="text-white">www.arquitectonicosah.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400" style={{ fontSize: '0.8rem' }}>Ubicación</p>
                    <p className="text-white">Colombia</p>
                  </div>
                </div>
              </div>

              {/* Catalina Rizo */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-cyan-400" style={{ fontSize: '0.8rem' }}>Ejecutiva Comercial</p>
                <p className="text-white mt-1">Catalina Rizo</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 mb-2" style={{ fontSize: '0.8rem' }}>
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2" style={{ fontSize: '0.8rem' }}>
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 mb-2" style={{ fontSize: '0.8rem' }}>
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2" style={{ fontSize: '0.8rem' }}>
                    Servicio de interés
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="Divisiones de Baño">Divisiones de Baño</option>
                    <option value="Ventanería en Aluminio">Ventanería en Aluminio</option>
                    <option value="Fachadas en Vidrio">Fachadas en Vidrio</option>
                    <option value="Barandas en Acero">Barandas en Acero Inoxidable</option>
                    <option value="Espejos LED">Espejos Luz LED</option>
                    <option value="Puertas de Seguridad">Puertas de Seguridad</option>
                    <option value="Marquesinas">Marquesinas en Policarbonato</option>
                    <option value="Cerrajería">Cerrajería a Domicilio</option>
                    <option value="PVC">PVC</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2" style={{ fontSize: '0.8rem' }}>
                  Describe tu proyecto
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-950 py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                {submitted ? (
                  '¡Redirigiendo a WhatsApp!'
                ) : (
                  <>
                    <Send size={16} />
                    Enviar por WhatsApp
                  </>
                )}
              </button>
              <p className="text-gray-500 text-center" style={{ fontSize: '0.75rem' }}>
                Tu solicitud será enviada directamente a nuestro WhatsApp para atención inmediata.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
