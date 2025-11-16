export default function Footer() {
  return (
    <footer className="bg-[#0A0F1F] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 text-white/70">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#phones">Phones</a></li>
              <li><a className="hover:text-white" href="#laptops">Laptops</a></li>
              <li><a className="hover:text-white" href="#cases">Phone Cases</a></li>
              <li><a className="hover:text-white" href="#accessories">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#about">About</a></li>
              <li><a className="hover:text-white" href="#blog">Blog</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#faq">FAQ</a></li>
              <li><a className="hover:text-white" href="#warranty">Warranty</a></li>
              <li><a className="hover:text-white" href="#returns">Shipping & Returns</a></li>
              <li><a className="hover:text-white" href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Newsletter</h4>
            <p className="text-sm">Get product drops and 3D experiences in your inbox.</p>
            <form className="mt-3 flex gap-2">
              <input className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#0066FF]" placeholder="you@domain.com" />
              <button className="rounded-md bg-[#FF6B00] px-4 py-2 text-sm font-semibold text-white hover:bg-[#E85F00]">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs">
          <p>© {new Date().getFullYear()} FlamesBlue Electronics. All rights reserved.</p>
          <p>Dark theme • Electric blue & orange accents</p>
        </div>
      </div>
    </footer>
  )
}
