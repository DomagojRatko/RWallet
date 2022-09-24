import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [calculatedPrice, setCalculatedPrice] = useState("");
  const [kn, setKN] = useState();
  const [eu, setEU] = useState();

  async function calculate() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setCalculatedPrice(await invoke("calculate", { kn, eu }));
  }

  return (
    <div className="container">
      <h1>Welcome to RWallet</h1>

      <div className="row">
        <a href="" target="_blank">
          <img src="/euro.svg" className="logo euro" alt="Euro logo" />
        </a>
        <a href="" target="_blank">
          <img src="/money.svg" className="logo money" alt="Money logo" />
        </a>
      </div>

      <p>Izračunaj povrat novaca u eurima.</p>

      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setEU(e.currentTarget.value)}
            placeholder="Iznos računa u €"
          />
        </div>
      </div>

      <br></br>

      <div className="row">
        <div>
            <input
            id="greet-input"
            onChange={(e) => setKN(e.currentTarget.value)}
            placeholder="Iznos zaprimljen u KN"
            />
        </div>
      </div>

      <br></br>

      <div className="row">
        <div>
            <button type="button" onClick={() => calculate()}>Izračunaj</button>
            <p>{calculatedPrice}</p>
        </div>
      </div>

      <br></br>

    </div>

  );
}

export default App;
