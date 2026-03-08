import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logopage.png"

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="flex items-center gap-3">
            <img src={logo} alt="Arquitectónicos In House" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <p className="text-white tracking-wider" style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}>
                ARQUITECTÓNICOS
              </p>
              <p className="text-cyan-400 tracking-widest" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>
                IN HOUSE
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 tracking-wide"
                style={{ fontSize: '0.85rem' }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/573122271701"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 px-5 py-2 rounded-full transition-colors duration-200 tracking-wide"
              style={{ fontSize: '0.85rem' }}
            >
              Cotizar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/98 backdrop-blur-lg border-t border-gray-800">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/573122271701"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-gray-950 py-3 px-4 rounded-lg transition-colors mt-2"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
