import "./App.css";
import { Roulette } from "./components/roulette";
const config2 = {
  scale: true,
  title: "Personajes",
  cards: [
    {
      imgUrl: "/full-characters/phoenix.png",
    },
    {
      imgUrl: "/full-characters/jett.png",
    },
    {
      imgUrl: "/full-characters/killjoy.png",
    },
    {
      imgUrl: "/full-characters/omen.png",
    },
    {
      imgUrl: "/full-characters/brimstone.png",
    },
    {
      imgUrl: "/full-characters/raze.png",
    },
    {
      imgUrl: "/full-characters/sage.png",
    },
    {
      imgUrl: "/full-characters/yoru.png",
    },
    {
      imgUrl: "/full-characters/breach.png",
    },
    {
      imgUrl: "/full-characters/astra.png",
    },
    {
      imgUrl: "/full-characters/viper.png",
    },
    {
      imgUrl: "/full-characters/sova.png",
    },
    {
      imgUrl: "/full-characters/skye.png",
    },
    {
      imgUrl: "/full-characters/cypher.png",
    },
    {
      imgUrl: "/full-characters/reyna.png",
    },
  ],
};
const config = {
  scale: true,
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

const mapas = {
  scale: false,
  title: "Mapas",
  cards: [
    {
      imgUrl: "/maps/BREEZE.jpg",
    },
    {
      imgUrl: "/maps/BREEZE.jpg",
    },
    {
      imgUrl: "/maps/BREEZE.jpg",
    },
    {
      imgUrl: "/maps/BREEZE.jpg",
    },
    {
      imgUrl: "/maps/BREEZE.jpg",
    },
  ],
};

function App() {
  return (
    <div className="App">
      {/* <Roulette {...config} /> */}
      <Roulette {...config2} />
      <Roulette {...mapas} />
    </div>
  );
}

export default App;
