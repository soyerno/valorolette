import Card from "./Card";
import { useRef, useState } from "react";
import { Player } from "./player";

export function Roulette({
  cards,
  title,
  timeLapse = 4,
  width = 150,
  randomize = true,
  cardCloneSetAmount = 5,
}) {
  const cardListRef = useRef();
  const distance = 1000 * width;

  const [firstCardStyles, setFirstCardStyles] = useState({
    marginLeft: 0,
    transition: `margin-left ${timeLapse}s ease-in-out`,
  });

  const [winnerName, setWinnerName] = useState(null);
  const [currentPos, setCurrentPos] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  function spinReset() {
    setFirstCardStyles({ ...firstCardStyles, marginLeft: 0 });
  }

  function spin() {
    setWinnerName(null)
    var newMargin = currentPos,
      newDistance = distance;
    // const winner = Math.random() * config.cards.length + cardCloneSetAmount;
    const winner = Math.random() * cards.length * cardCloneSetAmount;

    if (randomize) {
      newDistance = Math.floor(winner);
      newDistance *= width;
      newDistance += width / 2;
      newDistance -= width;
      newDistance -= 450;
    }
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
        <h2 className="roulette-title">{title}</h2>
        <div className="cardList" ref={cardListRef}>
          {new Array(cards.length * cardCloneSetAmount)
            .fill(cards)
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
          <Player play={isSpinning} url={"/slotSound1.wav"} />
          <Player play={winnerName} url={"/win.wav"} />
        </div>
        <span id="timer"></span>
      </div>
    </>
  );
}
