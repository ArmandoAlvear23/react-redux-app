import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBrownie } from "../redux";

function HooksBrownieContainer() {
  const numOfBrownies = useSelector((state) => state.brownie.numOfBrownies);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of brownies - {numOfBrownies}</h2>
      <button onClick={() => dispatch(buyBrownie())}>Buy brownie</button>
    </div>
  );
}

export default HooksBrownieContainer;
