import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteCard } from "../redux/reducers/slices/toolkitSlice";

const CardItem = () => {
  const cards = useSelector((state) => state.toolkit.cards);
  const dispatch = useDispatch();
  const { error, status } = useSelector((state) => state.toolkit);

  return status === "loading" ? (
    <h1>Loading ....</h1>
  ) : (
    <div>
      {error && <h1>Error: {error}</h1>}
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
