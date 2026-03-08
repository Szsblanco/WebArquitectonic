import logo from "../../assets/logo.jpeg";
import { Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800" style={{ background: '#050a0f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img src={logo} alt="Arquitectónicos In House" className="h-10 w-auto" />
            <div>
              <p className="text-white tracking-wider" style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}>
                ARQUITECTÓNICOS
              </p>
              <p className="text-cyan-400 tracking-widest" style={{ fontSize: '0.55rem', letterSpacing: '0.2em' }}>
                IN HOUSE
              </p>
            </div>
          </div>

          {/* Slogan */}
          <div className="text-center">
            <p className="text-gray-400 italic" style={{ fontSize: '0.85rem' }}>
              "Innovación que ilumina tu espacio"
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="https://wa.me/573122271701"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              style={{ fontSize: '0.85rem' }}
            >
              WhatsApp: 312-227-1701
            </a>
            <a
    href="https://www.facebook.com/inhouse1945"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group"
  >
    <Facebook
      size={18}
      className="transition-colors duration-300 group-hover:text-white"
    />
    <span style={{ fontSize: "0.85rem" }}>Facebook</span>
  </a>
            <p className="text-gray-500" style={{ fontSize: '0.8rem' }}>
              www.arquitectonicosah.com
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800/50 text-center">
          <p className="text-gray-600" style={{ fontSize: '0.75rem' }}>
            © {currentYear} Arquitectónicos In House. Todos los derechos reservados.
            Especialistas en Ventanería y Divisiones para remodelación.
          </p>
        </div>
      </div>
    </footer>
  );
}
