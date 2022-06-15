import "./App.css";
import { connect } from "react-redux";

import { incrementCounterAction, decrementCounterAction } from "./action";

function App(props) {
  let { incrementCounter, decrementCounter, value } = props;

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(incrementCounterAction()),
    decrementCounter: () => dispatch(decrementCounterAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// function App1({ val, setVal }) {
//   return (
//     <div>
//       <p>App1</p>
//       <App2 val={val} setVal={setVal} />
//     </div>
//   );
// }

// function App2({ val, setVal }) {
//   return (
//     <div>
//       <p>App2</p>
//       <App3 val={val} setVal={setVal} />
//     </div>
//   );
// }

// function App3({ val, setVal }) {
//   // Initially had some state in here.
//   return (
//     <div>
//       <p>App3</p>
//       <p>{val}</p>
//       <button onClick={() => setVal((prevVal) => prevVal + 1)}>Plus 1</button>
//     </div>
//   );
// }

// function App4({ val }) {
//   // Needs state from App3.
//   return (
//     <>
//       <p>Value from App3: {val}</p>
//       <p>App4</p>
//     </>
//   );
// }

// const state = {
//   val: 0
// };

// Use state
// Use state
// Manually change that state (state.val = 0)
// instead, change the global and waterfall down
// Use state
// Use state
// Use state
// Use state
// Use state
