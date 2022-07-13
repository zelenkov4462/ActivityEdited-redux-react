import React, { useEffect } from "react";
import { getRandomCard, getRandomCardAsync } from "../redux/Thunk/random";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../components/CardItem";

const RandomPage = () => {
  const dispatch = useDispatch();
  const favoriteCards = useSelector((state) => state.toolkit.favoriteCards);

  useEffect(() => {
    dispatch(getRandomCardAsync());
  }, [favoriteCards]);

  return (
    <div>
      <CardItem />
      <button onClick={() => dispatch(getRandomCardAsync())}>Next</button>
    </div>
  );
};

export default RandomPage;
