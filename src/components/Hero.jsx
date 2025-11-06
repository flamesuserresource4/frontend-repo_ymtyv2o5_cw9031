import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-black text-white">
      {/* Background media */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop"
          alt="Barbero trabajando con estilo cinematográfico"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-1 text-xs tracking-widest text-zinc-300"
        >
          BARBERÍA IMPERIUM
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-['Mona_Sans'] text-4xl font-semibold leading-tight md:text-6xl"
        >
          Corte, estilo y distinción
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-300 md:text-lg"
        >
          Una experiencia de barbería premium donde la tradición se une al diseño contemporáneo. Atención personalizada, técnica impecable y un ambiente creado para quienes valoran la excelencia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#reservas"
            className="rounded-md bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60"
          >
            Reserva tu cita
          </a>
          <a
            href="#servicios"
            className="rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
}
