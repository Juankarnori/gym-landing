import { Dumbbell, Flame, Users, Shield, Clock, Star, ArrowRight, CheckCircle, Zap, Trophy, Target } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '2,400+', label: 'Miembros activos' },
  { value: '15', label: 'Años de experiencia' },
  { value: '40+', label: 'Entrenadores certificados' },
  { value: '98%', label: 'Tasa de satisfacción' },
]

const servicios = [
  { icon: Dumbbell, titulo: 'Pesas & Fuerza', desc: 'Equipos de última generación para musculación, powerlifting y entrenamiento funcional de alto rendimiento.', color: 'text-orange-500' },
  { icon: Flame, titulo: 'Cardio & HIIT', desc: 'Clases de alta intensidad que queman grasa y elevan tu resistencia cardiovascular al máximo nivel.', color: 'text-red-500' },
  { icon: Users, titulo: 'Clases Grupales', desc: 'CrossFit, spinning, yoga, kickboxing y más. Más de 60 clases semanales con instructores élite.', color: 'text-blue-500' },
  { icon: Target, titulo: 'Entrenamiento Personal', desc: 'Programas 100% personalizados diseñados por nuestros coaches certificados para alcanzar tus metas.', color: 'text-purple-500' },
  { icon: Shield, titulo: 'Nutrición & Wellness', desc: 'Asesoría nutricional, suplementación y seguimiento para optimizar tus resultados.', color: 'text-green-500' },
  { icon: Trophy, titulo: 'Competencias', desc: 'Prepárate para competencias locales y nacionales con nuestros programas de periodización avanzada.', color: 'text-yellow-500' },
]

const planes = [
  {
    nombre: 'Básico',
    precio: 29,
    periodo: 'mes',
    desc: 'Perfecto para comenzar',
    features: ['Acceso a sala de pesas', 'Acceso a cardio', '2 clases grupales/semana', 'Vestuarios y duchas', 'App de seguimiento'],
    popular: false,
    cta: 'Empezar',
  },
  {
    nombre: 'Pro',
    precio: 59,
    periodo: 'mes',
    desc: 'El más popular',
    features: ['Todo lo del plan Básico', 'Clases grupales ilimitadas', '2 sesiones personales/mes', 'Acceso 24/7', 'Evaluación física mensual', 'Asesoría nutricional'],
    popular: true,
    cta: 'Elegir Pro',
  },
  {
    nombre: 'Elite',
    precio: 99,
    periodo: 'mes',
    desc: 'Para atletas serios',
    features: ['Todo lo del plan Pro', 'Sesiones personales ilimitadas', 'Plan de nutrición personalizado', 'Acceso a área VIP', 'Suplementos incluidos', 'Prioridad en clases', 'Coach dedicado'],
    popular: false,
    cta: 'Ir al Elite',
  },
]

const testimonios = [
  { nombre: 'Carlos Mendoza', rol: 'Miembro por 3 años', texto: 'IronPeak cambió completamente mi vida. Perdí 22 kg y gané músculo que nunca pensé que podría tener. Los coaches son increíbles.', stars: 5 },
  { nombre: 'Ana Rodríguez', rol: 'Competidora de CrossFit', texto: 'El mejor gimnasio de la ciudad sin duda. Las instalaciones son de primera y la comunidad te impulsa a dar lo mejor cada día.', stars: 5 },
  { nombre: 'Diego Vargas', rol: 'Miembro Elite', texto: 'Vine con el objetivo de prepararme para mi primera competencia. No solo lo logré — quedé segundo en mi categoría. El equipo es top.', stars: 5 },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Fondo */}
        <div className="absolute inset-0 bg-[var(--bg)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
            <Zap className="w-4 h-4" />
            #1 Gimnasio de alto rendimiento
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-[var(--text)] leading-none tracking-tight mb-6">
            FORJA TU<br />
            <span className="text-orange-500">MEJOR</span><br />
            VERSIÓN
          </h1>

          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Más de 2,400 atletas ya transformaron su cuerpo y mente en IronPeak. Equipos de última generación, coaches élite y la comunidad más motivada de la ciudad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#planes"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
              Comenzar ahora <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/dashboard"
              className="border-2 border-[var(--border)] hover:border-orange-500/50 text-[var(--text)] font-bold text-lg px-8 py-4 rounded-2xl transition flex items-center justify-center gap-2">
              Ver métricas
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map(s => (
              <div key={s.label} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
                <p className="text-3xl font-black text-orange-500 mb-1">{s.value}</p>
                <p className="text-sm text-[var(--text-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 px-4 bg-[var(--bg-card)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-3">Lo que ofrecemos</p>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text)]">Servicios de<br /><span className="text-orange-500">élite</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map(s => (
              <div key={s.titulo}
                className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 hover:border-orange-500/30 transition group">
                <div className={`w-12 h-12 rounded-xl bg-[var(--bg-card)] flex items-center justify-center mb-4 ${s.color}`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[var(--text)] text-lg mb-2 group-hover:text-orange-500 transition">{s.titulo}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA media */}
      <section className="py-20 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">¿Listo para el cambio?</h2>
          <p className="text-orange-100 text-xl mb-8">Primer mes gratis. Sin compromiso. Sin excusas.</p>
          <a href="#planes"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-black text-lg px-8 py-4 rounded-2xl hover:bg-orange-50 transition">
            Ver planes <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="py-24 px-4 bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-3">Membresías</p>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text)]">Planes para<br /><span className="text-orange-500">cada objetivo</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {planes.map(p => (
              <div key={p.nombre}
                className={`relative rounded-2xl p-8 border-2 transition ${p.popular ? 'border-orange-500 bg-orange-500/5' : 'border-[var(--border)] bg-[var(--bg-card)]'}`}>
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Más popular
                  </div>
                )}
                <p className="text-[var(--text-muted)] text-sm font-medium mb-1">{p.desc}</p>
                <p className="text-3xl font-black text-[var(--text)] mb-1">{p.nombre}</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-black text-orange-500">${p.precio}</span>
                  <span className="text-[var(--text-muted)] mb-2">/{p.periodo}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                      <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full font-bold py-3 rounded-xl transition ${p.popular ? 'bg-orange-500 hover:bg-orange-400 text-white' : 'border-2 border-[var(--border)] hover:border-orange-500 text-[var(--text)]'}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section className="py-20 px-4 bg-[var(--bg-card)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-3">Horarios</p>
          <h2 className="text-4xl font-black text-[var(--text)] mb-10">Abierto <span className="text-orange-500">cuando tú lo necesitas</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { dia: 'Lunes – Viernes', hora: '5:00 AM – 11:00 PM', icon: Clock },
              { dia: 'Sábado', hora: '6:00 AM – 10:00 PM', icon: Clock },
              { dia: 'Domingo', hora: '7:00 AM – 8:00 PM', icon: Clock },
            ].map(h => (
              <div key={h.dia} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6">
                <Clock className="w-6 h-6 text-orange-500 mb-3 mx-auto" />
                <p className="font-bold text-[var(--text)] mb-1">{h.dia}</p>
                <p className="text-orange-500 font-bold text-lg">{h.hora}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-24 px-4 bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-3">Testimonios</p>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--text)]">Lo que dicen<br /><span className="text-orange-500">nuestros atletas</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonios.map(t => (
              <div key={t.nombre} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">"{t.texto}"</p>
                <div>
                  <p className="font-bold text-[var(--text)]">{t.nombre}</p>
                  <p className="text-xs text-[var(--text-muted)]">{t.rol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-black text-[var(--text)]">IRON<span className="text-orange-500">PEAK</span></span>
          </div>
          <p className="text-sm text-[var(--text-muted)]">© {new Date().getFullYear()} IronPeak Gym. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm text-[var(--text-muted)]">
            <a href="#" className="hover:text-orange-500 transition">Privacidad</a>
            <a href="#" className="hover:text-orange-500 transition">Términos</a>
            <Link href="/dashboard" className="hover:text-orange-500 transition">Dashboard</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
