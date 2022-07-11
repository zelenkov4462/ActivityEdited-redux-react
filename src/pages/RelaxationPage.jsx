import React, { useEffect } from "react";
import CardItem from "../components/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { getRelaxCard } from "../redux/Thunk/relaxation";

const RelaxationPage = () => {
  const dispatch = useDispatch();
  const favoriteCards = useSelector((state) => state.cards.favoriteCards);

  useEffect(() => {
    dispatch(getRelaxCard());
  }, [favoriteCards]);
  return (
    <div>
      <CardItem />
      <button onClick={() => dispatch(getRelaxCard())}>Next</button>
    </div>
  );
};

export default RelaxationPage;
