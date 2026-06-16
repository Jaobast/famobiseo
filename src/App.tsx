import { HashRouter, Routes, Route } from "react-router-dom";

import Content from "./Pages/Content/Content";
import Sintaxe from "./Pages/Sintaxe/Sintaxe";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/sintaxe" element={<Sintaxe />} />
      </Routes>
    </HashRouter>
  )
}

export default App
