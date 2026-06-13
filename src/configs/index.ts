import maps from "./maps.json";
import charFaces from "./characters-face.json";
import charFull from "./characters-full.json";
import { ConfigEntry, RouletteConfig } from "../types";

export const configs: ConfigEntry[] = [
  {
    title: "Caras",
    config: charFaces as RouletteConfig,
  },
  {
    title: "Cuerpo Completo",
    config: charFull as RouletteConfig,
  },
  {
    title: "Mapas",
    config: maps as RouletteConfig,
  },
];
