import { motion } from "framer-motion";

const photos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576393834912-3f8f4b4b1b55?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517957754648-85b842c43c8f?q=80&w=1600&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Galería</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Un vistazo a nuestro espacio, herramientas y la esencia de nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {photos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-xl"
            >
              <img src={src} alt="Galería Imperium" className="h-40 w-full object-cover sm:h-48 md:h-56" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
