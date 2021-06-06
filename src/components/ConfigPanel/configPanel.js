import { useState } from "react";
import "./styles.scss";

export default function ConfigPanel({ configs, onSelect }) {
  const [selected, setSelected] = useState(1);

  return (
    <div className="config-panel-container">
      <div className="config-panel gradient-border">
        <h3 className="font-valo">Config</h3>
        <select
          className="select"
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value)
            onSelect(configs[e.target.value]);
          }}
        >
          {configs.map((c, k) => {
            return (
              <option className="option" key={k} value={k}>
                {c.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
