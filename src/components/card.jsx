import { useState, useEffect } from "react";
export function Card({ config, style, winnerName, isSpinning }) {
  const currentName = config.imgUrl.split("/").pop().split(".")[0];
  const [currentClass, setCurrentClass] = useState("");
  
  useEffect(() => {
    isSpinning
      ? setCurrentClass("card opacity05")
      : winnerName !== null && winnerName !== currentName
      ? setCurrentClass("card opacity05")
      : setCurrentClass("card");
  }, [winnerName, isSpinning, currentName]);

  return (
    <div className={currentClass} style={style}>
      <img src={config.imgUrl} alt="" />
    </div>
  );
}
