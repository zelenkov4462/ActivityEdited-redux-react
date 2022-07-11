import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    cards: [],
    favoriteCards: [],
  },
  reducers: {
    getCard(state, action) {
      state.cards = action.payload;
    },
    addFavoriteCard(state, action) {
      state.favoriteCards.push(action.payload);
    },
    removeFavoriteCard(state, action) {
      state.favoriteCards = state.favoriteCards.filter(
        (card) => card.key !== action.payload
      );
    },
  },
});

export default toolkitSlice.reducer;
export const { getCard, addFavoriteCard, removeFavoriteCard } =
  toolkitSlice.actions;
