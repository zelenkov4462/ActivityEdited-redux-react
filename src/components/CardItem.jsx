import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteCard } from "../redux/toolkitSlice";

const CardItem = () => {
  const cards = useSelector((state) => state.toolkit.cards);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{cards.activity}</h1>
      <h3>{cards.type}</h3>
      <h3>{cards.key}</h3>
      <button onClick={() => dispatch(addFavoriteCard(cards))}>
        Добавить в избранное
      </button>
    </div>
  );
};

export default CardItem;
