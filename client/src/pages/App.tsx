import './styles/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing.tsx";


function App() {

  return  (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Landing />} ></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
