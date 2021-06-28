import { combineReducers } from "redux";
import modalWindow from './modalWindow/reducer';
import user from './user/reducer';

const reducer = combineReducers({
  modalWindow,
  user,
});

export default reducer;
