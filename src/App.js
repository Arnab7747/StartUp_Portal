import Nav from './components/Nav';
import Slider from './components/Slider';
import './App.css'
import Home from "./components/Home";
import Footer from './components/Footer';
// import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Slider/>
      <Home/>
      <Footer/>
      {/* <Register/> */}

    </div>
  );
}

export default App;
