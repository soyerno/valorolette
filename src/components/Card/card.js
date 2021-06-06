import "./styles.scss";
export default function Card({ config, style, winnerName, isSpinning, scale }) {
  const currentName = config.imgUrl.split("/").pop().split(".")[0];

  const file = config.imgUrl.split("/");

  const fileName = file[file.length - 1];

  const name = fileName.split(".")[0];

  return (
    <div
      className={`card ${isSpinning ? "opacity05" : ""} ${
        winnerName !== null && winnerName !== currentName ? "opacity05" : ""
      }`}
      style={{ ...style }}
    >
      <div
        className={`card-image-container ${isSpinning ? "spinning" : ""} ${
          winnerName === name ? "winner" : ""
        } ${scale ? "scale" : ""}`}
      >
        <img src={config.imgUrl} alt={currentName} className={`card-image  ${scale ? "scale" : ""}`} />
        <p>{name}</p>
      </div>
    </div>
  );
}
