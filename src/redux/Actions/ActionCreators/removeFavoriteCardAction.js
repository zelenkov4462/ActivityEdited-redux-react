import { REMOVE_FAVORITE_CARD } from "../../Reducers/cardReducer";

export const removeFavoriteCardAction = (payload) => ({
  type: REMOVE_FAVORITE_CARD,
  payload,
});
