import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { Fragment } from "react";
import Modal from "./Components/Modal";
function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Products />
      </div>
    </Fragment>
  );
}

export default App;
