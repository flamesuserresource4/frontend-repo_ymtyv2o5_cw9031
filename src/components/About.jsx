import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-nosotros" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?q=80&w=1600&auto=format&fit=crop"
              alt="Equipo de Barbería Imperium"
              className="h-full w-full rounded-xl object-cover"
            />
            <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-28 w-28 rotate-6 rounded-lg border border-zinc-800 bg-zinc-900/60 md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-semibold md:text-4xl">Sobre nosotros</h2>
            <p className="mt-4 text-zinc-300">
              Nacimos de la pasión por el oficio clásico y la estética moderna. En Imperium, cada detalle importa: desde la preparación de la piel hasta el último toque del peine. Nuestro compromiso es ofrecer una experiencia artesanal con productos de alto nivel y un servicio impecable.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-zinc-300 sm:grid-cols-2">
              <li className="rounded-md border border-zinc-800 bg-zinc-900/40 p-4">Atención al detalle</li>
              <li className="rounded-md border border-zinc-800 bg-zinc-900/40 p-4">Experiencia artesanal</li>
              <li className="rounded-md border border-zinc-800 bg-zinc-900/40 p-4">Productos premium</li>
              <li className="rounded-md border border-zinc-800 bg-zinc-900/40 p-4">Estilo contemporáneo</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
