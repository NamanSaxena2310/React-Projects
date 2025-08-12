import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import AuthForm from "./Pages/AuthForm"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<AuthForm/>}/>
      </Routes>
    </>
  )
}

export default App
