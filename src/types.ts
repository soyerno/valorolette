export interface CardConfig {
  imgUrl: string;
}

export interface RouletteConfig {
  scale?: boolean;
  title: string;
  cards: CardConfig[];
  timeLapse?: number;
  size?: number;
  orientation?: "h" | "v";
  cardCloneSetAmount?: number;
}

export interface ConfigEntry {
  title: string;
  config: RouletteConfig;
}
