import { getCard } from "../toolkitSlice";

export const getEducationCard = () => {
  return function (dispatch) {
    fetch("http://www.boredapi.com/api/activity?type=education")
      .then((response) => response.json())
      .then((json) => dispatch(getCard(json)));
  };
};
