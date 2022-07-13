import { createSlice } from "@reduxjs/toolkit";
import { getRandomCardAsync } from "../../Thunk/random";
import { getEducationCardAsync } from "../../Thunk/education";
import { getRelaxCardAsync } from "../../Thunk/relaxation";
import { getSocialCardAsync } from "../../Thunk/social";
import { getCharityCardAsync } from "../../Thunk/charity";

const setPending = (state, action) => {
  state.status = "loading";
  state.error = null;
};
const setFulfilled = (state, action) => {
  state.status = "resolved";
  state.cards = action.payload;
};
const setRejected = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    cards: [],
    favoriteCards: [],
    status: null,
    error: null,
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
  extraReducers: {
    [getRandomCardAsync.pending]: setPending,
    [getRandomCardAsync.fulfilled]: setFulfilled,
    [getRandomCardAsync.rejected]: setRejected,

    [getEducationCardAsync.pending]: setPending,
    [getEducationCardAsync.fulfilled]: setFulfilled,
    [getEducationCardAsync.rejected]: setRejected,

    [getRelaxCardAsync.pending]: setPending,
    [getRelaxCardAsync.fulfilled]: setFulfilled,
    [getRelaxCardAsync.rejected]: setRejected,

    [getSocialCardAsync.pending]: setPending,
    [getSocialCardAsync.fulfilled]: setFulfilled,
    [getSocialCardAsync.rejected]: setRejected,

    [getCharityCardAsync.pending]: setPending,
    [getCharityCardAsync.fulfilled]: setFulfilled,
    [getCharityCardAsync.rejected]: setRejected,
  },
});

export default toolkitSlice.reducer;
export const { getCard, addFavoriteCard, removeFavoriteCard } =
  toolkitSlice.actions;
