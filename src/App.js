
import star from "../src/asset/star.mp4"
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import "./App.css"
function App() {
  return (
    <>
    <div className="videoWrapper" >
    <video autoPlay  muted loop plays-inline  style={{position:"fixed"}} >
      <source src={star} type="video/mp4"/>
     </video>
     <Navbar/>
     <Home/>
    </div>
    
   
    </> 
  );
}

export default App;
