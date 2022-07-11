import React, { useEffect } from "react";
import CardItem from "../components/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { getSocialCard } from "../redux/Thunk/social";

const SocialPage = () => {
  const dispatch = useDispatch();
  const favoriteCards = useSelector((state) => state.cards.favoriteCards);

  useEffect(() => {
    dispatch(getSocialCard());
  }, [favoriteCards]);
  return (
    <div>
      <CardItem />
      <button onClick={() => dispatch(getSocialCard())}>Next</button>
    </div>
  );
};

export default SocialPage;
