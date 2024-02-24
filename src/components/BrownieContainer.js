import React from "react";
import { connect } from "react-redux";
import { buyBrownie } from "../redux";

function BrownieContainer(props) {
  return (
    <div>
      <h2>Number of brownies: {props.numOfBrownies}</h2>
      <button onClick={props.buyBrownie}>Buy Brownie</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfBrownies: state.brownie.numOfBrownies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBrownie: () => dispatch(buyBrownie()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrownieContainer);
