import Navbar from "./conponents/Navbar"
import Hero from "./conponents/Hero"
import Tech from "./conponents/Tech"
import Projects from "./conponents/Projects"
import Contact from "./conponents/Contact"


const App: React.FC = () => {

 


  return (
      <>
      <div className="fixed -z-10 min-h-screen inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar/>
        <Hero/>
        <Tech/>
        <Projects/>
        <Contact/>
      </main>
      </>
  )
}

export default App
