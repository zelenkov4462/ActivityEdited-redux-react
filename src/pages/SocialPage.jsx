import React, { useEffect } from "react";
import CardItem from "../components/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { getSocialCard, getSocialCardAsync } from "../redux/Thunk/social";

const SocialPage = () => {
  const dispatch = useDispatch();
  const favoriteCards = useSelector((state) => state.toolkit.favoriteCards);

  useEffect(() => {
    dispatch(getSocialCardAsync());
  }, [favoriteCards]);
  return (
    <div>
      <CardItem />
      <button onClick={() => dispatch(getSocialCardAsync())}>Next</button>
    </div>
  );
};

export default SocialPage;
