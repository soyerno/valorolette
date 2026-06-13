# Valorolette 🎯

Una **ruleta estilo tragamonedas para Valorant**: gira y te asigna al azar un **agente** o un **mapa**. Pensada para noches de juego y *desafíos* entre amigos — dejá que la suerte decida con quién y dónde jugás.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)
![Create React App](https://img.shields.io/badge/CRA-09D3AC?style=flat&logo=createreactapp&logoColor=white)

## ✨ Qué hace

- 🎰 **Ruleta animada** con efecto de tragamonedas y sonido al girar y al acertar.
- 🧑‍🚀 **Modos de sorteo** intercambiables — agentes (cara / cuerpo completo) y mapas.
- ⌨️ **Panel de configuración** rápido: apretá la tecla **`o`** para cambiar de modo.
- 🎨 Estética fiel a Valorant: fuente propia (`valo.ttf`), wallpapers y paleta del juego.

## 🧱 Stack

React (Create React App) · Sass · hooks propios (`useKeyPress`) · datos en JSON (`characters-face`, `characters-full`, `maps`).

## 🚀 Cómo correrlo

```bash
yarn install
yarn start      # http://localhost:3000
yarn build      # build de producción en /build
```

## 📂 Estructura

```
src/
├── components/
│   ├── roulette.js        # ruleta principal
│   ├── player.js
│   ├── Card/              # carta del resultado
│   └── ConfigPanel/       # selector de modo (tecla "o")
├── configs/               # agentes y mapas (JSON)
├── hooks/keyPress.js      # atajo de teclado
└── App.js
```

## 📝 Nota

Proyecto personal, hecho por gusto. Valorant y sus assets son propiedad de Riot Games; este repo es un fan project sin fines comerciales.

---

Hecho por [Hernán De Souza](https://github.com/soyerno).
