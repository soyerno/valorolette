import Card from "./Card";
import { useRef, useState } from "react";
import { Player } from "./player";

export function Roulette({
  scale = false,
  cards,
  title,
  timeLapse = 4,
  size = 150,
  orientation = "h",
  cardCloneSetAmount = 3,
}) {
  const cardListRef = useRef();
  const distance = 0;

  const [firstCardStyles, setFirstCardStyles] = useState({
    marginLeft: 0,
    transition: `margin-${
      orientation === "h" ? "left" : "top"
    } ${timeLapse}s ease-in-out`,
  });

  const [winnerName, setWinnerName] = useState(null);
  const [currentPos, setCurrentPos] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  function spinReset() {
    setFirstCardStyles({ ...firstCardStyles, marginLeft: 0 });
  }

  function spin() {
    setWinnerName(null);
    let newMargin = currentPos;
    let newDistance = distance * cardCloneSetAmount * 5;
    const winner = Math.random() * cards.length * cardCloneSetAmount;

    newDistance = Math.floor(winner);
    newDistance *= size;
    newDistance -= size * 3.5;
    newDistance += size;

    newMargin = -newDistance;
    const cardWinner = cards[Math.floor(winner) % cards.length];
    const cardWinnerName =
      cardWinner && cardWinner.imgUrl.split("/").pop().split(".")[0];
    setTimeout(() => {
      setCurrentPos(newMargin);
      setWinnerName(cardWinnerName);
    }, timeLapse * 1000);
    setFirstCardStyles({ ...firstCardStyles, marginLeft: newMargin });
  }

  function runSpin() {
    spinReset();
    spin();
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, timeLapse * 1000);
  }

  return (
    <>
      <div id="container" className="roulette-container">
        <h1 className="roulette-title font-valo">{title}</h1>
        <div className="cardList" ref={cardListRef}>
          {new Array(cards.length * cardCloneSetAmount)
            .fill(cards)
            .flat()
            .map((c, k) => {
              return (
                <Card
                  scale={scale}
                  isSpinning={isSpinning}
                  winnerName={winnerName}
                  style={k === 0 ? firstCardStyles : {}}
                  key={`${c.imgUrl }_ ${k}`}
                  config={c}
                />
              );
            })}
        </div>
        <div className="bts">
          <button id="spin" className="cooldown font-valo" onClick={runSpin}>
            Girar
          </button>
          {/* <button id="reset" className="cooldown" onClick={spinReset}>
            Reset
          </button> */}
          <Player play={isSpinning} url={"/slotSound1.wav"} />
          <Player play={winnerName} url={"/win.wav"} />
        </div>
        <span id="timer"></span>
      </div>
    </>
  );
}
