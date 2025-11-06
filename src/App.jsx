import { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";

function Navbar() {
  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;
      if (window.scrollY > 10) header.classList.add("bg-black/70", "backdrop-blur");
      else header.classList.remove("bg-black/70", "backdrop-blur");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="header" className="fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#inicio" className="text-lg font-semibold tracking-wide">
          Imperium
        </a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#sobre-nosotros" className="hover:text-white">Sobre</a>
          <a href="#galeria" className="hover:text-white">Galería</a>
          <a href="#reservas" className="rounded-md bg-[#d4af37] px-4 py-2 font-semibold text-black hover:brightness-110">Reservar</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-10 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Barbería Imperium. Todos los derechos reservados.</p>
        <a href="#inicio" className="text-sm hover:text-white">Volver arriba</a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "Barbería Imperium | Estilo, tradición y lujo masculino";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Descubre una experiencia de barbería premium en el corazón de la ciudad. Barbería Imperium: cortes clásicos, afeitados de precisión y atención de lujo."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
