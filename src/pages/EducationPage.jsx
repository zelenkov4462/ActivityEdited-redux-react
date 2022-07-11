import React, { useEffect } from "react";
import CardItem from "../components/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { getEducationCard } from "../redux/Thunk/education";
import { getRandomCard } from "../redux/Thunk/random";

const EducationPage = () => {
  const dispatch = useDispatch();
  const favoriteCards = useSelector((state) => state.toolkit.favoriteCards);

  useEffect(() => {
    dispatch(getEducationCard());
  }, [favoriteCards]);

  return (
    <div>
      <CardItem />
      <button onClick={() => dispatch(getEducationCard())}>Next</button>
    </div>
  );
};

export default EducationPage;
