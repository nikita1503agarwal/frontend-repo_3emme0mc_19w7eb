import { useEffect, useState, Suspense, lazy } from 'react'

// Lazy-load Spline so a failure there never blocks the whole page
const Spline = lazy(() => import('@splinetool/react-spline'))

function SplineFallback() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,255,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(255,107,0,0.18),transparent_40%)]" />
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Ensure we only attempt WebGL on the client
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0F1F]">
      <div className="absolute inset-0">
        {mounted ? (
          <Suspense fallback={<SplineFallback />}> 
            <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </Suspense>
        ) : (
          <SplineFallback />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0A0F1F]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Elevate Your Tech Experience
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80">
            Premium phones, laptops, and accessories with immersive 3D previews and real-time customization.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#featured" className="inline-flex items-center justify-center rounded-md bg-[#0066FF] px-5 py-3 text-white font-semibold hover:bg-[#0A5BE0] transition">Shop Featured</a>
            <a href="#cases" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-white font-semibold hover:bg-white/10 transition">Design a Case</a>
          </div>
        </div>
      </div>
    </section>
  )
}
