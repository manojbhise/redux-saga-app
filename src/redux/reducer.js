const SET_VAL = 'SET_VAL';

const initialState = {
  val: 0
}

export const setVal = (val) => {
  return {
    type: SET_VAL,
    payload: val
  };
};  

const myFirstReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_VAL: {
      return {
        ...state,
        val: action.payload
      };
    }
    default:
      return state;
  }
};

export default myFirstReducer;