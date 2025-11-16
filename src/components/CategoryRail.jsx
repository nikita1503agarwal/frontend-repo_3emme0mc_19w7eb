import { useEffect, useState } from 'react'

const categoriesFallback = ["Phones", "Laptops", "Phone Cases", "Accessories"]

export default function CategoryRail() {
  const [categories, setCategories] = useState(categoriesFallback)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/categories`)
        const data = await res.json()
        if (Array.isArray(data) && data.length) setCategories(data)
      } catch {}
    }
    load()
  }, [])

  return (
    <section className="bg-[#0A0F1F] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => (
            <a key={c} href={`#${c.toLowerCase().replace(/\s+/g,'-')}`} className="shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10">
              {c}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
