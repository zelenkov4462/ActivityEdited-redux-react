import React, { useEffect } from "react";
import CardItem from "../components/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { getCharityCard, getCharityCardAsync } from "../redux/Thunk/charity";

const CharityPage = () => {
  const dispatch = useDispatch();
  const favoriteCards = useSelector((state) => state.toolkit.favoriteCards);

  useEffect(() => {
    dispatch(getCharityCardAsync());
  }, [favoriteCards]);
  return (
    <div>
      <CardItem />
      <button onClick={() => dispatch(getCharityCardAsync())}>Next</button>
    </div>
  );
};

export default CharityPage;
