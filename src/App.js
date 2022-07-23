import { Component } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { About } from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="container-page">
        <Main />
        <About />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
