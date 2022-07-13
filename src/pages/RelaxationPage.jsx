import React, { useEffect } from "react";
import CardItem from "../components/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { getRelaxCard, getRelaxCardAsync } from "../redux/Thunk/relaxation";

const RelaxationPage = () => {
  const dispatch = useDispatch();
  const favoriteCards = useSelector((state) => state.toolkit.favoriteCards);

  useEffect(() => {
    dispatch(getRelaxCardAsync());
  }, [favoriteCards]);
  return (
    <div>
      <CardItem />
      <button onClick={() => dispatch(getRelaxCardAsync())}>Next</button>
    </div>
  );
};

export default RelaxationPage;
