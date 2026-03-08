import Hero from './Hero';
import Services from './Services';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}
