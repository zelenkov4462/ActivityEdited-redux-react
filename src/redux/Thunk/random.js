import { getCard } from "../toolkitSlice";

export const getRandomCard = () => {
  return function (dispatch) {
    fetch("http://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((json) => dispatch(getCard(json)));
  };
};
