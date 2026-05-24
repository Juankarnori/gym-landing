'use client'

import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { Users, DollarSign, TrendingUp, Activity, ArrowLeft, ArrowUp, ArrowDown } from 'lucide-react'
import Link from 'next/link'

const ventasMensuales = [
  { mes: 'Ene', ventas: 18400, meta: 16000 },
  { mes: 'Feb', ventas: 21200, meta: 18000 },
  { mes: 'Mar', ventas: 19800, meta: 20000 },
  { mes: 'Abr', ventas: 24600, meta: 22000 },
  { mes: 'May', ventas: 28100, meta: 24000 },
  { mes: 'Jun', ventas: 26400, meta: 26000 },
  { mes: 'Jul', ventas: 31200, meta: 28000 },
  { mes: 'Ago', ventas: 29800, meta: 30000 },
  { mes: 'Sep', ventas: 33500, meta: 30000 },
  { mes: 'Oct', ventas: 35100, meta: 32000 },
  { mes: 'Nov', ventas: 38400, meta: 34000 },
  { mes: 'Dic', ventas: 41200, meta: 36000 },
]

const miembrosPorPlan = [
  { plan: 'Básico', miembros: 890, color: '#6b7280' },
  { plan: 'Pro', miembros: 1240, color: '#f97316' },
  { plan: 'Elite', miembros: 310, color: '#a855f7' },
]

const asistenciaSemanal = [
  { dia: 'Lun', manana: 142, tarde: 98, noche: 187 },
  { dia: 'Mar', manana: 128, tarde: 115, noche: 201 },
  { dia: 'Mié', manana: 156, tarde: 134, noche: 178 },
  { dia: 'Jue', manana: 119, tarde: 142, noche: 195 },
  { dia: 'Vie', manana: 167, tarde: 189, noche: 212 },
  { dia: 'Sáb', manana: 234, tarde: 198, noche: 89 },
  { dia: 'Dom', manana: 178, tarde: 145, noche: 67 },
]

const retencionMensual = [
  { mes: 'Ene', tasa: 84 }, { mes: 'Feb', tasa: 86 }, { mes: 'Mar', tasa: 83 },
  { mes: 'Abr', tasa: 88 }, { mes: 'May', tasa: 91 }, { mes: 'Jun', tasa: 89 },
  { mes: 'Jul', tasa: 92 }, { mes: 'Ago', tasa: 90 }, { mes: 'Sep', tasa: 94 },
  { mes: 'Oct', tasa: 93 }, { mes: 'Nov', tasa: 96 }, { mes: 'Dic', tasa: 98 },
]

const kpis = [
  { label: 'Ingresos mensuales', value: '$41,200', change: '+7.3%', up: true, icon: DollarSign, color: 'text-green-400' },
  { label: 'Miembros activos', value: '2,440', change: '+12.4%', up: true, icon: Users, color: 'text-blue-400' },
  { label: 'Asistencia diaria', value: '487', change: '-3.1%', up: false, icon: Activity, color: 'text-orange-400' },
  { label: 'Tasa de retención', value: '98%', change: '+2.1%', up: true, icon: TrendingUp, color: 'text-purple-400' },
]

const tooltipStyle = {
  backgroundColor: '#161618',
  border: '1px solid #ffffff0f',
  borderRadius: '12px',
  color: '#f1f5f9',
  fontSize: '12px',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] pt-20">
      {/* Header */}
      <div className="border-b border-[var(--border)] bg-[var(--bg-card)] px-4 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 rounded-lg hover:bg-[var(--bg-card2)] transition text-[var(--text-muted)] hover:text-[var(--text)]">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-black text-[var(--text)] text-xl">Dashboard de Métricas</h1>
              <p className="text-xs text-[var(--text-muted)]">IronPeak Gym — Diciembre 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-[var(--text-muted)]">En vivo</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map(k => (
            <div key={k.label} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-[var(--text-muted)] font-medium">{k.label}</p>
                <div className={`w-8 h-8 rounded-lg bg-[var(--bg-card2)] flex items-center justify-center ${k.color}`}>
                  <k.icon className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-black text-[var(--text)] mb-1">{k.value}</p>
              <div className={`flex items-center gap-1 text-xs font-semibold ${k.up ? 'text-green-400' : 'text-red-400'}`}>
                {k.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                {k.change} vs mes anterior
              </div>
            </div>
          ))}
        </div>

        {/* Ventas mensuales */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
          <div className="mb-6">
            <h2 className="font-black text-[var(--text)] text-lg">Ventas mensuales</h2>
            <p className="text-sm text-[var(--text-muted)]">Ingresos reales vs meta — 2024</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={ventasMensuales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
              <XAxis dataKey="mes" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false}
                tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${Number(v).toLocaleString()}`, '']} />
              <Legend wrapperStyle={{ fontSize: 12, color: '#6b7280' }} />
              <Line type="monotone" dataKey="ventas" stroke="#f97316" strokeWidth={2.5} dot={{ fill: '#f97316', r: 4 }} name="Ventas" />
              <Line type="monotone" dataKey="meta" stroke="#6b7280" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Meta" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Row 2: Miembros + Retención */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Miembros por plan */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
            <div className="mb-6">
              <h2 className="font-black text-[var(--text)] text-lg">Miembros por plan</h2>
              <p className="text-sm text-[var(--text-muted)]">Distribución actual — 2,440 total</p>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={miembrosPorPlan} barSize={48}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                <XAxis dataKey="plan" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="miembros" radius={[8, 8, 0, 0]} name="Miembros"
                  fill="#f97316"
                  label={{ position: 'top', fill: '#6b7280', fontSize: 11 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Retención */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
            <div className="mb-6">
              <h2 className="font-black text-[var(--text)] text-lg">Tasa de retención</h2>
              <p className="text-sm text-[var(--text-muted)]">% de miembros que renuevan — 2024</p>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={retencionMensual}>
                <defs>
                  <linearGradient id="gradRetención" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
                <XAxis dataKey="mes" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis domain={[75, 100]} tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false}
                  tickFormatter={v => `${v}%`} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, 'Retención']} />
                <Area type="monotone" dataKey="tasa" stroke="#f97316" strokeWidth={2.5}
                  fill="url(#gradRetención)" dot={{ fill: '#f97316', r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Asistencia semanal */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
          <div className="mb-6">
            <h2 className="font-black text-[var(--text)] text-lg">Asistencia semanal</h2>
            <p className="text-sm text-[var(--text-muted)]">Visitas por turno — semana actual</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={asistenciaSemanal} barSize={20}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
              <XAxis dataKey="dia" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12, color: '#6b7280' }} />
              <Bar dataKey="manana" radius={[4, 4, 0, 0]} fill="#f97316" name="Mañana" />
              <Bar dataKey="tarde" radius={[4, 4, 0, 0]} fill="#6b7280" name="Tarde" />
              <Bar dataKey="noche" radius={[4, 4, 0, 0]} fill="#a855f7" name="Noche" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Resumen rápido */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8">
          {[
            { label: 'Nuevos miembros este mes', value: '147', sub: '+23 vs mes anterior' },
            { label: 'Cancelaciones este mes', value: '31', sub: '-8 vs mes anterior' },
            { label: 'Ingreso por miembro', value: '$16.9', sub: 'Promedio mensual' },
          ].map(r => (
            <div key={r.label} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5">
              <p className="text-xs text-[var(--text-muted)] mb-2">{r.label}</p>
              <p className="text-2xl font-black text-orange-500">{r.value}</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">{r.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
