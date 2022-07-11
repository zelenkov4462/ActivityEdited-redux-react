import { getCardAction } from "../Actions/ActionCreators/getCardAction";

export const getRandomCard = () => {
  return function (dispatch) {
    fetch("http://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((json) => dispatch(getCardAction(json)));
  };
};
