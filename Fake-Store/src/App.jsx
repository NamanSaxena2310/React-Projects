import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import AuthForm from "./Pages/AuthForm"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Products from "./Pages/Products"
import Cart from "./Pages/Cart"
import ProductDetail from "./Pages/ProductDetail"

function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
        
        <Route path="/"  element={<AuthForm/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product-detail" element={<ProductDetail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
