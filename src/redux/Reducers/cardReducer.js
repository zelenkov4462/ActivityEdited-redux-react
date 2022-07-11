import { initialState } from "../../store/initialState";

export const GET_CARD = "GET_CARD";
export const ADD_FAVORITE_CARD = "ADD_FAVORITE_CARD";
export const REMOVE_FAVORITE_CARD = "REMOVE_FAVORITE_CARD";

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD:
      return { ...state, cards: action.payload };
    case ADD_FAVORITE_CARD:
      return {
        ...state,
        favoriteCards: [...state.favoriteCards, action.payload],
        // favoriteCards: state.favoriteCards.push(action.payload),
      };
    case REMOVE_FAVORITE_CARD:
      return {
        ...state,
        favoriteCards: state.favoriteCards.filter(
          (card) => card.key !== action.payload
        ),
      };
    default:
      return state;
  }
};
