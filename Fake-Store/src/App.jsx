import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import AuthForm from "./Pages/AuthForm"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<AuthForm/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
