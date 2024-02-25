import React from "react";
import { connect } from "react-redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>
        {props.item} - {props.numItems}
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

export default connect(mapStateToProps)(ItemContainer);
