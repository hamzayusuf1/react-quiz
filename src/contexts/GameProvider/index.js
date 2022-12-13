import { createContext, useContext, useReducer } from "react";
import { questions } from "../../data/questions";
import { CHANGE_CATEGORY, NEXT_QUESTION, START_GAME } from "../Actions";

const GameContext = createContext();

export const useGame = () => {
  return useContext(GameContext);
};

const initialState = {
  gameStarted: false,
  category: "football",
  questions: questions.football,
};

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameStarted: true,
        questions: questions[state.category],
      };

    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
