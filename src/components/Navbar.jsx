import { useState } from 'react'
import { Menu, Search, ShoppingCart, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400" />
            <span className="text-white font-semibold text-lg tracking-wide">FlamesBlue</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#phones" className="hover:text-white transition">Phones</a>
            <a href="#laptops" className="hover:text-white transition">Laptops</a>
            <a href="#cases" className="hover:text-white transition">Phone Cases</a>
            <a href="#accessories" className="hover:text-white transition">Accessories</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-md hover:bg-white/10 text-white"><Search size={18} /></button>
            <button className="p-2 rounded-md hover:bg-white/10 text-white"><ShoppingCart size={18} /></button>
            <button className="p-2 rounded-md hover:bg-white/10 text-white"><User size={18} /></button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-white/10 text-white">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 space-y-2 text-white/80">
            <a href="#phones" className="block px-2 py-2 rounded hover:bg-white/10">Phones</a>
            <a href="#laptops" className="block px-2 py-2 rounded hover:bg-white/10">Laptops</a>
            <a href="#cases" className="block px-2 py-2 rounded hover:bg-white/10">Phone Cases</a>
            <a href="#accessories" className="block px-2 py-2 rounded hover:bg-white/10">Accessories</a>
          </div>
        )}
      </div>
    </header>
  )
}
