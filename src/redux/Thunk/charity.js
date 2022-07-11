import { getCard } from "../toolkitSlice";

export const getCharityCard = () => {
  return function (dispatch) {
    fetch("http://www.boredapi.com/api/activity?type=charity")
      .then((response) => response.json())
      .then((json) => dispatch(getCard(json)));
  };
};
