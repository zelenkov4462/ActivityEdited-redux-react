// import { getCard } from "../toolkitSlice";
//
// export const getSocialCard = () => {
//   return function (dispatch) {
//     fetch("http://www.boredapi.com/api/activity?type=social")
//       .then((response) => response.json())
//       .then((json) => dispatch(getCard(json)));
//   };
// };

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSocialCardAsync = createAsyncThunk(
  "getSocialCardAsync",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "http://www.boredapi.com/api/activity?type=social"
      );
      if (!response.ok) {
        throw new Error("social err");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
