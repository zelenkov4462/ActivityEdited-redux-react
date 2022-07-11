import { ADD_FAVORITE_CARD } from "../../Reducers/cardReducer";

export const addFavoriteCardAction = (payload) => ({
  type: ADD_FAVORITE_CARD,
  payload,
});
