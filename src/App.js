import { useState } from "react";
import "./App.css";
import { Roulette } from "./components/roulette";
import ConfigPanel from "./components/ConfigPanel";
import { useKeyPress } from "./hooks/keyPress";
import { configs } from "./configs";

function App() {
  const configPress = useKeyPress("o");
  const [selected, setSelected] = useState(configs[1]);

  return (
    <div className="App">
      {configPress && <ConfigPanel configs={configs} onSelect={setSelected} />}
      {/* <Roulette {...config} /> */}
      <Roulette {...selected.config} />
      {/* <Roulette {...mapas} /> */}
    </div>
  );
}

export default App;
