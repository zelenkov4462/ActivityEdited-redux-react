// import { getCard } from "../toolkitSlice";
//
// export const getRandomCard = () => {
//   return function (dispatch) {
//     fetch("http://www.boredapi.com/api/activity")
//       .then((response) => response.json())
//       .then((json) => dispatch(getCard(json)));
//   };
// };

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRandomCardAsync = createAsyncThunk(
  "toolkit/getRandomCardAsync",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch("http://www.boredapi.com/api/activity");

      if (!response.ok) {
        throw new Error("random error");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
