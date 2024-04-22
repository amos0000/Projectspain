import './App.css';
import Home from './page/Home/Home.jsx';
import LandingOptions from './page/Landing/Landing.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
 return (
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/Landing" element={<LandingOptions/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
 )
}


export default App


