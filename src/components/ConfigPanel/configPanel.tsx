import { useState } from "react";
import "./styles.scss";
import { ConfigEntry } from "../../types";

interface ConfigPanelProps {
  configs: ConfigEntry[];
  onSelect: (config: ConfigEntry) => void;
}

export default function ConfigPanel({ configs, onSelect }: ConfigPanelProps) {
  const [selected, setSelected] = useState(1);

  return (
    <div className="config-panel-container">
      <div className="config-panel gradient-border">
        <h3 className="font-valo">Config</h3>
        <select
          className="select"
          value={selected}
          onChange={(e) => {
            const index = Number(e.target.value);
            setSelected(index);
            onSelect(configs[index]);
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
