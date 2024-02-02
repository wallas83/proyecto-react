import { Home } from "./components/home"
import { Navbar } from "./components/navbar";
import './components/app.css';
import { Services } from "./components/services";
import { About } from "./components/about";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <About />
      </main>

    </>

  )
}

export default App
