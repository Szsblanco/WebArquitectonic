import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#080e14' }}>
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
