// import { getCard } from "../toolkitSlice";
//
// export const getCharityCard = () => {
//   return function (dispatch) {
//     fetch("http://www.boredapi.com/api/activity?type=charity")
//       .then((response) => response.json())
//       .then((json) => dispatch(getCard(json)));
//   };
// };

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCharityCardAsync = createAsyncThunk(
  "toolkit/getCharityCardAsync",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "http://www.boredapi.com/api/activity?type=charity"
      );

      if (!response.ok) {
        throw new Error("");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
