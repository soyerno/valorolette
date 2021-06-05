import { Card } from "./card";
import { useRef, useState } from "react";
import { Player } from "../components/player";

export function Roulette({ config }) {
  const cardListRef = useRef();
  const timeLapse = 2.5;
  const width = 150;
  const randomize = true;
  const distance = 100 * width;
  const cardCloneSetAmount = 5;

  const [firstCardStyles, setFirstCardStyles] = useState({
    marginLeft: 0,
    transition: `margin-left ${timeLapse}s ease-in-out`,
  });

  const [winnerName, setWinnerName] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  
  function spinReset() {
    setFirstCardStyles({ ...firstCardStyles, marginLeft: 0 });
  }

  function spin() {
    var newMargin = 0,
      newDistance = distance;
    // const winner = Math.random() * config.cards.length + cardCloneSetAmount;
    const winner = Math.random() * config.cards.length * cardCloneSetAmount;

    if (randomize) {
      newDistance = Math.floor(winner);
      newDistance *= width;
      newDistance += width / 2;
      newDistance -= width;
      newDistance -= 450;
    }
    newMargin = -newDistance;
    const cardWinner = config.cards[Math.floor(winner) % config.cards.length];
    const cardWinnerName = cardWinner && cardWinner.imgUrl.split("/").pop().split(".")[0];
    setWinnerName(cardWinnerName);
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
        <h2 className="roulette-title">{config.title}</h2>
        <div className="cardList" ref={cardListRef}>
          {new Array(config.cards.length * cardCloneSetAmount)
            .fill(config.cards)
            .flat()
            .map((c, k) => {
              return (
                <Card
                  isSpinning={isSpinning}
                  winnerName={winnerName}
                  style={k === 0 ? firstCardStyles : {}}
                  key={k}
                  config={c}
                />
                //   <Card style={{marginLeft: '200px'}} key={k} config={c} />
              );
            })}
        </div>
        <div className="bts">
          <button id="spin" className="cooldown" onClick={runSpin}>
            Jugar
          </button>
          {/* <button id="reset" className="cooldown" onClick={spinReset}>
            Reset
          </button> */}
          <Player play={isSpinning} url={"/slotSound.wav"} />
        </div>
        <span id="timer"></span>
      </div>
    </>
  );
}
