import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import DesignSection from "./components/DesignSection"
import Hero from "./components/Hero"
import Features from "./components/Features"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <DesignSection />
      <Features />
    </BrowserRouter>
  )
}

export default App