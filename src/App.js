import Nav from "./components/Nav";
// import Slider from "./components/Slider";
import "./App.css";
// import Home from "./components/Home/Home";
import Footer from "./components/Footer";
// import { useAuth0 } from "@auth0/auth0-react";

// import Register from "./components/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scheme from "./components/scheme/Scheme";

function App() {
  // const { loginWithRedirect } = useAuth0();
  return (
    <div >
      {/* <button onClick={() => loginWithRedirect()}>Log In</button>; */}
      




      <Nav />
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
          

         
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
