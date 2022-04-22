import { resetCase, shuffleCase, getRandomLegs, getRandomPlayers } from "Utils";

export const data = [
  {
    id: 1,
    name: "앵무새",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196378.png",
    color: "gray",
    nickname: ""
  },
  {
    id: 2,
    name: "돼지",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196361.png",
    color: "crimson",
    nickname: ""
  },
  {
    id: 3,
    name: "말",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196364.png",
    color: "darkolivegreen",
    nickname: ""
  },
  {
    id: 4,
    name: "낙타",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196366.png",
    color: "lightseagreen",
    nickname: ""
  },
  {
    id: 5,
    name: "강아지",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196381.png",
    color: "darkorange",
    nickname: ""
  },
  {
    id: 6,
    name: "닭",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196373.png",
    color: "peru",
    nickname: ""
  },
  {
    id: 7,
    name: "양",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196374.png",
    color: "royalblue",
    nickname: ""
  },
  {
    id: 8,
    name: "달팽이",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196369.png",
    color: "saddlebrown",
    nickname: ""
  },
  {
    id: 9,
    name: "뱀",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196360.png",
    color: "green",
    nickname: ""
  },
  {
    id: 10,
    name: "코끼리",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196359.png",
    color: "rebeccapurple",
    nickname: ""
  },
  {
    id: 11,
    name: "키위",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196372.png",
    color: "lightgreen",
    nickname: ""
  },
  {
    id: 12,
    name: "고슴도치",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196387.png",
    color: "pink",
    nickname: ""
  },
  {
    id: 13,
    name: "물개",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196379.png",
    color: "lightblue",
    nickname: ""
  },
  {
    id: 14,
    name: "늑대",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196380.png",
    color: "darkgray",
    nickname: ""
  },
  {
    id: 15,
    name: "해마",
    src: "https://cdn-icons-png.flaticon.com/512/7196/7196376.png",
    color: "yellow",
    nickname: ""
  },
];

export const initState = {
  page: "home",
  playerCount: 2,
  players: [],
  cases: {},
  results: {},
  gameState: "notReady",
  legs: [],
};

export const reducer = (state, action) => {
  //const bla = () => console.log("from reducer", state);
  switch (action.type) {
    case "INC_PLAYERS":
      return {
        ...state,
        playerCount: state.playerCount + 1,
      };
    case "DEC_PLAYERS":
      return {
        ...state,
        playerCount: state.playerCount - 1,
      };
    case "ENTER_GAME":
      return {
        ...state,
        page: "game",
        players: getRandomPlayers(state.playerCount, data),
        cases: resetCase(state.playerCount),
        legs: getRandomLegs(state.playerCount),
      };
    case "SHUFFLE_CASES":
      return {
        ...state,
        players: getRandomPlayers(state.playerCount, data),
        cases: shuffleCase(state.cases)
      };
    case "START_GAME":
      return {
        ...state,
        gameState: "playing",
        cases: state.cases
      };
    case "INPUT_CASE":
      return {
        ...state,
        cases: { ...state.cases, [action.idx]: action.value },
      };
    case "CHECK_READY":
      return {
        ...state,
        gameState: action.isReady ? "ready" : "notReady",
      };
    case "GO_HOME":
      return {
        ...state,
        page: "home",
        gameState: "notReady",
      };
    case "GO_RESULT":
      return {
        ...state,
        page: "result",
        gameState: "notReady",
      };
    case "GO_GAME":
      return {
        ...state,
        page: "game",
        gameState: "notReady",
        results: {},
        players: getRandomPlayers(state.playerCount, data),
        cases: resetCase(state.playerCount),
        legs: getRandomLegs(state.playerCount),
      };
    case "UPDATE_RESULT":
      return {
        ...state,
        gameState:
          Object.keys(state.results).length + 1 === state.playerCount
            ? "done"
            : "playing",
        results: { ...state.results, [action.idx]: action.posX },
      };
    default:
      throw new Error("Unhandled action type");
  }
};
