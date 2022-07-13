import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteCard } from "../redux/reducers/slices/toolkitSlice";

const FavoritePage = () => {
  const favoriteCards = useSelector((state) => state.toolkit.favoriteCards);
  const dispatch = useDispatch();
  console.log(favoriteCards);
  return (
    <div>
      {favoriteCards.map((card, index) => (
        <div key={card.key}>
          <li>
            <div>
              {index + 1}. {card.activity}
              <h3>type: {card.type}</h3>
            </div>
            <button onClick={() => dispatch(removeFavoriteCard(card.key))}>
              Удалить
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default FavoritePage;
