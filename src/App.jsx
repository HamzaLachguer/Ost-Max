import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import DesignSection from "./components/DesignSection"
import Hero from "./components/Hero"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <DesignSection />
    </BrowserRouter>
  )
}

export default App