import logo from "./logo.svg";
import "./App.css";
import Navbar from "./compoents/Navbar";
import Home from "./compoents/Home";
import SocialLinks from "./compoents/SocialLinks";
import About from "./compoents/About";
import Porfolio from "./compoents/Porfolio";
import Experience from "./compoents/Experience";
import Contat from "./compoents/Contat";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialLinks />
      <About/>
      <Porfolio/>
      <Experience/>
      <Contat/>
    </>
  );
}

export default App;
