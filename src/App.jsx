import useReveal from './useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <div className="lg:ml-72">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
=======
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
>>>>>>> e8ac33cfca897500158a363306c8cc6cc4448be4
    </>
  )
}
