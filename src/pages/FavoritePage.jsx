import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteCardAction } from "../redux/Actions/ActionCreators/removeFavoriteCardAction";

const FavoritePage = () => {
  const favoriteCards = useSelector((state) => state.cards.favoriteCards);
  const dispatch = useDispatch();
  return (
    <div>
      {favoriteCards.map((card, index) => (
        <div key={card.key}>
          <li>
            <div>
              {index + 1}. {card.activity}
              <h3>type: {card.type}</h3>
            </div>
            <button
              onClick={() => dispatch(removeFavoriteCardAction(card.key))}
            >
              Удалить
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default FavoritePage;
