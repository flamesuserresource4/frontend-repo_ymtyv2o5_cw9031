import { Scissors, Sparkles, ShieldCheck, Bath, Crown } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scissors,
    title: "Corte clásico",
    desc: "Técnica tradicional con acabado pulcro y preciso.",
    price: "€28",
    image:
      "https://images.unsplash.com/photo-1517963628607-235ccdd5476b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Bath,
    title: "Afeitado con toalla caliente",
    desc: "Ritual de afeitado al estilo clásico con toalla y bálsamos premium.",
    price: "€24",
    image:
      "https://images.unsplash.com/photo-1593702295090-198b3f0a2f1c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: ShieldCheck,
    title: "Arreglo de barba",
    desc: "Definición, contorno y nutrición para una barba impecable.",
    price: "€20",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Tratamiento facial masculino",
    desc: "Limpieza profunda y revitalización para una piel fresca.",
    price: "€35",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Crown,
    title: "Corte VIP",
    desc: "Servicio exclusivo en cabina privada con bebidas de cortesía.",
    price: "€55",
    image:
      "https://images.unsplash.com/photo-1615499486321-905b41b1a7d2?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Servicios</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              Selección de tratamientos premium que combinan precisión artesanal con
              productos de primera calidad.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-zinc-800 p-2 text-[#d4af37]">
                        <Icon size={18} />
                      </span>
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                    </div>
                    <span className="rounded-md bg-[#d4af37]/10 px-2 py-1 text-sm font-medium text-[#d4af37]">
                      {s.price}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{s.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
