const initialState = {
    value: 0
};

// const actionsFormat = {
//   type: 'SOME_ACTION_TYPE',
//   payload: 4, //Some sort of data including objects and arrays.
// };

// Responsible for taking an action type and performing
// that action on the application's state.
export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                value: state.value + 1
            };
        case "DECREMENT":
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
}

  // A lot of reducers in the store and the state is passed through all of them.
  // function commerceCartReducer(state, action) {
  //   switch (action.type) {
  //     case "ADD_ITEM":
  //       // Do something
  //     case "DELETE_ITEM":
  //       // Do something
  //     default:
  //         return state;
  //   }
  // }

  // function reducer2(state = initialState, action) {}
  // function reducer3(state, action) {}
  // function reducer4(state, action) {}
