import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import Galery from "./components/Galery/Galery";
import Modal from "./components/Modal/Modal";
import Producers from "./components/Producers/Producers";

let Home = (props) => {
  return (
    <div className="homeContent">
      <div>
        <h1>ПРОМСНАБ</h1>
      </div>
      <div>
        <h2>ПРОМЫШЛЕННОЕ СНАБЖЕНИЕ</h2>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route path="/Modal" render={() => <Modal />} />
          <Route path="/Home" render={() => <Home />} />
          <Route path="/Catalog" render={() => <Catalog />} />
          <Route path="/Galery" render={() => <Galery />} />
          <Route path="/Producers" render={() => <Producers />} />
          <Route path="/About" render={() => <About />} />
          <Route path="/Contact" render={() => <Contact />} />

      </div>
    </BrowserRouter>
  );
}

export default App;
