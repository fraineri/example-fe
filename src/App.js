import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";


const BACK_IP = process.env.REACT_APP_BACK_IP;

function App() {
  useEffect(() => {
    console.log("process.env", JSON.stringify(process.env));
    console.log("BACK_IP", BACK_IP);
    axios.get(`http://${BACK_IP}:3000/`).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
