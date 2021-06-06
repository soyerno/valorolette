import { useState, useEffect } from "react";
import "./styles.scss";
export default function Card({ config, style, winnerName, isSpinning }) {
  const currentName = config.imgUrl.split("/").pop().split(".")[0];
  const [currentClass, setCurrentClass] = useState("");

  useEffect(() => {
    isSpinning
      ? setCurrentClass("card opacity05")
      : winnerName !== null && winnerName !== currentName
      ? setCurrentClass("card opacity05")
      : setCurrentClass("card");
  }, [winnerName, isSpinning, currentName]);

  const file = config.imgUrl.split("/");

  const fileName = file[file.length - 1];

  const name = fileName.split(".")[0];

  return (
    <div className={currentClass} style={{ ...style }}>
      <div
        className={`card-image-container ${isSpinning ? "spinning" : ""} ${
          winnerName === name ? "winner" : ""
        }`}
      >
        <img src={config.imgUrl} atl="card" className="card-image" />
        <p>{name}</p>
      </div>
    </div>
  );
}
