'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Sun, Moon, Menu, X, Zap } from 'lucide-react'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#planes', label: 'Planes' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '/dashboard', label: 'Dashboard' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-400 transition">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-xl text-[var(--text)] tracking-tight">
            IRON<span className="text-orange-500">PEAK</span>
          </span>
        </Link>

        {/* Links escritorio */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-orange-500 transition">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Derecha */}
        <div className="flex items-center gap-3">
          <button onClick={toggle}
            className="p-2 rounded-lg hover:bg-[var(--bg-card)] transition text-[var(--text-muted)] hover:text-[var(--text)]">
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a href="#planes"
            className="hidden md:block bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold px-4 py-2 rounded-xl transition">
            Únete ahora
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[var(--text-muted)]">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Móvil */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4 space-y-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-sm font-medium text-[var(--text-muted)] hover:text-orange-500 transition py-1">
              {l.label}
            </Link>
          ))}
          <a href="#planes" onClick={() => setOpen(false)}
            className="block text-center bg-orange-500 hover:bg-orange-400 text-white font-bold px-4 py-3 rounded-xl transition mt-2">
            Únete ahora
          </a>
        </div>
      )}
    </nav>
  )
}
