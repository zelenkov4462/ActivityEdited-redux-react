import React, { useEffect } from "react";
import CardItem from "../components/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { getCharityCard } from "../redux/Thunk/charity";

const CharityPage = () => {
  const dispatch = useDispatch();
  const favoriteCards = useSelector((state) => state.cards.favoriteCards);

  useEffect(() => {
    dispatch(getCharityCard());
  }, [favoriteCards]);
  return (
    <div>
      <CardItem />
      <button onClick={() => dispatch(getCharityCard())}>Next</button>
    </div>
  );
};

export default CharityPage;
