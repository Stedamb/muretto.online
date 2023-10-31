import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar } from "./components";

import './i18n';

function App() {

  return (
    <BrowserRouter>
      <div className='content'>
        <div className='header'>
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
