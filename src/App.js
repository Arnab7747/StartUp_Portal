import Nav from "./components/Nav";
<<<<<<< HEAD
import Slider from "./components/Slider";
import Home from "./components/Home/Home";
=======
// import Slider from "./components/Slider";
import "./App.css";
// import Home from "./components/Home/Home";
>>>>>>> 3312a6d7b807780f9cc049d678c89cd5a455ee3b
import Footer from "./components/Footer";
import "./App.css";
// import { useAuth0 } from "@auth0/auth0-react";

// import Register from "./components/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Startup } from "./components/Startup/Startup";
import { NewStartup } from "./components/Startup/NewStartup";
=======
import Scheme from "./components/scheme/Scheme";
>>>>>>> 3312a6d7b807780f9cc049d678c89cd5a455ee3b

function App() {
  // const { loginWithRedirect } = useAuth0();
  return (
    <div >
      {/* <button onClick={() => loginWithRedirect()}>Log In</button>; */}
      <Nav />
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<div> <div className="App"> <Slider /> </div> <Home /> </div>} />
          <Route path="/startups" element={<Startup />} />
          <Route path="/AddNewStartup" element={<NewStartup />} />
=======
      <Scheme/>
      

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* <div className="App"> */}
                {/* <Slider/> */}

                {/* </div> */}
                
                {/* <Home /> */}
                
              </div>
            }
          />
          

         
>>>>>>> 3312a6d7b807780f9cc049d678c89cd5a455ee3b
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
