import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import DesignSection from "./components/DesignSection"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <DesignSection />
    </BrowserRouter>
  )
}

export default App