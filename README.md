# IronPeak Gym — Landing Page + Dashboard de Métricas

> Landing page moderna para un gimnasio ficticio de alto rendimiento,  
> con dashboard de métricas empresariales y modo oscuro/claro integrado.  
> **[Ver en vivo →](https://ironpeak.vercel.app)**

---

## El problema que resuelve

Los gimnasios y negocios de fitness suelen tener presencias web genéricas que no comunican su propuesta de valor. Además, los dueños no tienen visibilidad clara de sus métricas clave — cuántos miembros activos tienen, en qué horarios hay mayor asistencia o cómo van las ventas vs la meta mensual.

Este proyecto resuelve ambas cosas:
- Una landing page que convierte visitantes en miembros
- Un dashboard que convierte datos en decisiones

---

## Tecnologías

| Capa | Tecnología |
|---|---|
| Frontend | **Next.js 16** + TypeScript + Tailwind CSS 4 |
| Gráficas | **Recharts** |
| Modo oscuro | ThemeProvider propio con localStorage |
| Deploy | **Vercel** |

---

## Funcionalidades

### Landing page `/`
- Hero con headline de alto impacto y CTAs
- 4 stats destacados (miembros, años, entrenadores, satisfacción)
- 6 tarjetas de servicios (pesas, HIIT, clases grupales, personal, nutrición, competencias)
- 3 planes de precios con el plan Pro destacado
- Horarios de atención
- Testimonios de miembros con rating
- Navbar responsive con toggle de modo oscuro/claro

### Dashboard `/dashboard`
- 4 KPIs con indicador de variación vs mes anterior (↑↓)
- Gráfica de líneas — ventas reales vs meta mensual (12 meses)
- Gráfica de barras — distribución de miembros por plan
- Gráfica de área — tasa de retención mensual
- Gráfica de barras agrupadas — asistencia por turno (mañana/tarde/noche)
- 3 tarjetas de resumen rápido (nuevos, cancelaciones, ingreso por miembro)

---

## Lo más interesante técnicamente

El reto principal fue implementar el **modo oscuro/claro sin dependencias externas** — sin next-themes ni librerías adicionales. Lo construí con un ThemeProvider propio que:

1. Lee la preferencia guardada en `localStorage` al montar
2. Aplica o quita la clase `.dark` en el `<html>`
3. Persiste el cambio entre sesiones

```tsx
// ThemeProvider.tsx — toggle sin librerías
useEffect(() => {
  const saved = localStorage.getItem('theme') as Theme | null
  const initial = saved ?? 'dark'
  setTheme(initial)
  document.documentElement.classList.toggle('dark', initial === 'dark')
}, [])
```

El segundo reto fue hacer las **gráficas de Recharts completamente responsive** usando `ResponsiveContainer` y formateando los valores del eje Y para que no se corten en pantallas pequeñas (`$18k` en vez de `$18,400`).

---

## Estructura del proyecto

```
app/
├── components/
│   ├── Navbar.tsx         ← Navegación + toggle oscuro/claro
│   └── ThemeProvider.tsx  ← Context de tema sin dependencias
├── dashboard/
│   └── page.tsx           ← 4 gráficas Recharts + KPIs
└── page.tsx               ← Landing completa
```

---

## Correr localmente

```bash
git clone https://github.com/Juankarnori/gym-landing.git
cd gym-landing
npm install
npm run dev   # http://localhost:3000
```

No requiere variables de entorno — el proyecto es completamente estático.

---

*Desarrollado por [Juan Noriega](https://github.com/Juankarnori) · Ambato, Ecuador*
