import Nav from './components/Nav'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Nav />
      <Hero />
      <Sections />
      <Footer />
    </div>
  )
}

export default App
