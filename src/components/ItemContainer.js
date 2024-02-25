import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>
        {props.item} - {props.numItems}
        <br />
        <button onClick={props.buyItem}>Buy {props.item}</button>
      </h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const item = ownProps.cake
    ? `cake${state.cake.numOfCakes === 1 ? "" : "s"}: `
    : `ice cream${state.iceCream.numOfIceCreams === 1 ? "" : "s"}: `;
  const numItems = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item,
    numItems,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
