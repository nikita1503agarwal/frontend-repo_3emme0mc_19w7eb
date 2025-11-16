import { useEffect, useState } from 'react'

const brandBlue = '#0066FF'
const brandOrange = '#FF6B00'

function ProductCard({ item }) {
  return (
    <a href={`#product-${item.id || item.title}`} className="group relative overflow-hidden rounded-xl bg-[#0F172A] border border-white/10">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={item.images?.[0]} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold group-hover:text-[var(--brand-blue)] transition" style={{ ['--brand-blue']: brandBlue }}>
            {item.title}
          </h3>
          <span className="text-white/80 font-mono">${item.price}</span>
        </div>
        <p className="mt-2 text-sm text-white/60 line-clamp-2">{item.description}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">{item.category}</span>
          {item.featured && <span className="inline-flex items-center rounded-full bg-[var(--brand-orange)]/20 px-2 py-1 text-xs text-[var(--brand-orange)]" style={{ ['--brand-orange']: brandOrange }}>Featured</span>}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-[#0066FF]/20 via-transparent to-transparent" />
    </a>
  )
}

export default function FeaturedGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products/featured?limit=8`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="featured" className="relative bg-[#0A0F1F] py-20">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0066FF] via-transparent to-[#FF6B00] opacity-60" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Bestsellers</h2>
          <a href="#all" className="text-sm text-white/70 hover:text-white">View all</a>
        </div>

        {loading ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-64 animate-pulse rounded-xl bg-white/5" />
            ))}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <ProductCard key={item.id || item.title} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
