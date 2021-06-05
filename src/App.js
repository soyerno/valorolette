import "./App.css";
import { Roulette } from "./components/roulette";

const config = {
  title: "Personajes",
  cards: [
    {
      imgUrl: "/characters/phoenix.png",
    },
    {
      imgUrl: "/characters/jett.png",
    },
    {
      imgUrl: "/characters/killjoy.png",
    },
    {
      imgUrl: "/characters/omen.png",
    },
    {
      imgUrl: "/characters/brimstone.png",
    },
    {
      imgUrl: "/characters/raze.png",
    },
    {
      imgUrl: "/characters/sage.png",
    },
    {
      imgUrl: "/characters/yoru.png",
    },
    {
      imgUrl: "/characters/breach.png",
    },
    {
      imgUrl: "/characters/astra.png",
    },
    {
      imgUrl: "/characters/viper.png",
    },
    {
      imgUrl: "/characters/sova.png",
    },
    {
      imgUrl: "/characters/skye.png",
    },
    {
      imgUrl: "/characters/cypher.png",
    },
    {
      imgUrl: "/characters/reyna.png",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Roulette config={config} />
      {/* <Roulette config={config} />
      <Roulette config={config} />
      <Roulette config={config} />
      <Roulette config={config} /> */}
    </div>
  );
}

export default App;
