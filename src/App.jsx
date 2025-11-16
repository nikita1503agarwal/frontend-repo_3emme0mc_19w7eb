import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryRail from './components/CategoryRail'
import FeaturedGrid from './components/FeaturedGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1F]">
      <Navbar />
      <main>
        <Hero />
        <CategoryRail />
        <FeaturedGrid />
      </main>
      <Footer />
    </div>
  )
}
