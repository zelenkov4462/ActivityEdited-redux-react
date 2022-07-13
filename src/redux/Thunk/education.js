// import { getCard } from "../toolkitSlice";
//
// export const getEducationCard = () => {
//   return function (dispatch) {
//     fetch("http://www.boredapi.com/api/activity?type=education")
//       .then((response) => response.json())
//       .then((json) => dispatch(getCard(json)));
//   };
// };

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEducationCardAsync = createAsyncThunk(
  "toolkit/getEducationCardAsync",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "http://www.boredapi.com/api/activity?type=education"
      );
      if (!response.ok) {
        throw new Error("education err");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
