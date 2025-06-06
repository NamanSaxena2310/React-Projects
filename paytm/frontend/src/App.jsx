import { Route, Router } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import Send from "./pages/Send"
import Heading from "./components/Heading"
import SubHeading from "./components/SubHeading"
import InputBox from "./components/InputBox"

function App() {

  return (
    // <Router>
    //     <Route path="/signup" element={<Signup/>}/>
    //     <Route path="/signin" element={<Signin/>}/>
    //     <Route path="/dashboard" element={<Dashboard/>}/>
    //     <Route path="/send" element={<Send/>}/>
    // </Router>

    <>
      <Heading label={'Signup'}/>
      <SubHeading text={'Enter your information '}/>
      <InputBox placeholder={'John'} label={'First Name'}/>
    </>
  )
}

export default App
