import { getCard } from "../toolkitSlice";

export const getSocialCard = () => {
  return function (dispatch) {
    fetch("http://www.boredapi.com/api/activity?type=social")
      .then((response) => response.json())
      .then((json) => dispatch(getCard(json)));
  };
};
