const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      //lOGIC INCREMENT

      return state + action.payload;

    case "DECREMENT":
      //lOGIC DECREMENT

      return state - action.payload;

    default:
      return state;
  }
};

export default counterReducer;
