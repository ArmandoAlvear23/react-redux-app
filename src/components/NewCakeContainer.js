import { useState } from "react";
import { connect } from "react-redux";
import { buyCake, returnCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>
        Buy {number} Cake{number == 1 ? "" : "s"}
      </button>
      <button onClick={props.returnCake} disabled={props.numOfCakes === 10}>
        Return Cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    returnCake: () => dispatch(returnCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
