import './App.css';
import Home from './page/Home/Home.jsx';
import LandingOptions from './page/Landing/Landing.jsx';
import Sign from './page/log/login/Login.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
 return (
  <>
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingOptions/>}></Route>
        <Route path="/Landing" element={<LandingOptions/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Sign" element={<Sign/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
 )
}


export default App


