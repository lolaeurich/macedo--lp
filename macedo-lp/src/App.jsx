import EquipeCarousel from "./components/EquipeCarousel.jsx";
import Hero from "./components/Hero.jsx";
import Sobre from "./components/Sobre.jsx";
import Atuacao from "./components/Atuacao.jsx";
import NavBar from "./components/NavBar.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <>
        <div className="h-full w-full font-Playfair">
           <NavBar/>
            <Hero/>
            <Sobre/>
            <div className={'bg-gradient-to-b from-black via-yellow-900 to-gray-950'}>
            <Atuacao/>
            <EquipeCarousel/>
            </div>
            <div className={'w-full bg-gradient-to-b from-gray-950 to-black h-[600px]'}>
                <Contato/>
            </div>
            <div>
               <Footer/>
            </div>
        </div>
    </>
  )
}

export default App
