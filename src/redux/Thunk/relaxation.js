// import { getCard } from "../toolkitSlice";
//
// export const getRelaxCard = () => {
//   return function (dispatch) {
//     fetch("http://www.boredapi.com/api/activity?type=relaxation")
//       .then((response) => response.json())
//       .then((json) => dispatch(getCard(json)));
//   };
// };

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRelaxCardAsync = createAsyncThunk(
  "toolkit/getRelaxCardAsync",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "http://www.boredapi.com/api/activity?type=relaxation"
      );
      if (!response.ok) {
        throw new Error("relax err");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
