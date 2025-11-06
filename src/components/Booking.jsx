import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Phone, User, MessageCircle, MapPin, Mail } from "lucide-react";

export default function Booking() {
  const [form, setForm] = useState({ nombre: "", telefono: "", fecha: "", hora: "", servicio: "Corte clásico" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const whatsappLink = () => {
    const base = "https://wa.me/";
    const phone = "34600000000"; // Replace with real number if available
    const text = encodeURIComponent(
      `Hola, soy ${form.nombre}. Quisiera reservar ${form.servicio} para el ${form.fecha} a las ${form.hora}. Mi teléfono: ${form.telefono}.`
    );
    return `${base}${phone}?text=${text}`;
  };

  return (
    <section id="reservas" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Reservas</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Agenda tu próxima experiencia Imperium. Elige el servicio, la fecha y la hora.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-300 flex items-center gap-2"><User size={16}/> Nombre</label>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="rounded-md border border-zinc-700 bg-black px-3 py-2 outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-300 flex items-center gap-2"><Phone size={16}/> Teléfono</label>
                <input
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="rounded-md border border-zinc-700 bg-black px-3 py-2 outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-300 flex items-center gap-2"><Calendar size={16}/> Fecha</label>
                <input
                  type="date"
                  required
                  value={form.fecha}
                  onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                  className="rounded-md border border-zinc-700 bg-black px-3 py-2 outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-zinc-300 flex items-center gap-2"><Clock size={16}/> Hora</label>
                <input
                  type="time"
                  required
                  value={form.hora}
                  onChange={(e) => setForm({ ...form, hora: e.target.value })}
                  className="rounded-md border border-zinc-700 bg-black px-3 py-2 outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="text-sm text-zinc-300">Servicio</label>
                <select
                  value={form.servicio}
                  onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                  className="rounded-md border border-zinc-700 bg-black px-3 py-2 outline-none focus:ring-2 focus:ring-[#d4af37]"
                >
                  <option>Corte clásico</option>
                  <option>Afeitado con toalla caliente</option>
                  <option>Arreglo de barba</option>
                  <option>Tratamiento facial masculino</option>
                  <option>Corte VIP</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="rounded-md bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60"
              >
                Confirmar solicitud
              </button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#25D366] px-6 py-3 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366]/10"
              >
                <MessageCircle size={18} /> Reservar por WhatsApp
              </a>
              {sent && (
                <span className="text-sm text-green-400">Solicitud enviada. Te contactaremos para confirmar.</span>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-lg font-semibold">Ubicación y contacto</h3>
              <p className="mt-2 text-zinc-400">En el corazón de la ciudad, a pasos de todo.</p>
              <div className="mt-4 space-y-2 text-zinc-300">
                <p className="flex items-center gap-2"><MapPin size={16}/> Calle Imperial 123, Centro</p>
                <p className="flex items-center gap-2"><Phone size={16}/> +34 600 000 000</p>
                <p className="flex items-center gap-2"><Mail size={16}/> contacto@imperiumbarberia.com</p>
              </div>
              <div className="mt-4">
                <iframe
                  title="Mapa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.154052101594!2d2.170047315676601!3d41.38739797926353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f338e035f3%3A0xe2f0b98b2e1b98a8!2sPla%C3%A7a%20de%20Catalunya%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1615555555555!5m2!1ses!2ses"
                  width="100%"
                  height="260"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg border border-zinc-800"
                ></iframe>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-lg font-semibold">Horario</h3>
              <ul className="mt-2 space-y-1 text-zinc-300">
                <li>Lunes a Viernes — 10:00 a 20:00</li>
                <li>Sábado — 10:00 a 14:00</li>
                <li>Domingo — Cerrado</li>
              </ul>
              <div className="mt-4 flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">Facebook</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
