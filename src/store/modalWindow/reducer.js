import { TOGGLE_IS_OPEN } from './types';

const initialState = {
  isOpen: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case TOGGLE_IS_OPEN:
      return { ...state, isOpen: action.payload } 
  }
}

export default reducer;