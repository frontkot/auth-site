import { combineReducers } from "redux";
import modalWindow from './modalWindow/reducer';
import user from './user/reducer';
import { reducer as toastr } from "react-redux-toastr";

const reducer = combineReducers({
  modalWindow,
  user,
  toastr,
});

export default reducer;
