import { Home } from "./components/home"
import { Navbar } from "./components/navbar";
import './components/app.css';
import { Services } from "./components/services";
import { About } from "./components/about";
import { FooterOther } from "./components/footerOther";
import { NewsLetter } from "./components/newsLetter";

import banner from './assets/panabanner2.png';
import { Product } from "./components/product";
function App() {
  
  const name = 'How to desing your site footer like we did'
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <About />
        <Product banner={banner} name={name}/>
        <NewsLetter />
        <FooterOther />
      </main>

    </>

  )
}

export default App
