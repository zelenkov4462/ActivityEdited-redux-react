import { getCard } from "../toolkitSlice";

export const getRelaxCard = () => {
  return function (dispatch) {
    fetch("http://www.boredapi.com/api/activity?type=relaxation")
      .then((response) => response.json())
      .then((json) => dispatch(getCard(json)));
  };
};
