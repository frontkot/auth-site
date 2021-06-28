import { LOG_IN, LOG_OUT } from './types';

const initialState = {
  isLogin: JSON.parse(localStorage.getItem('user')) !== null ? true : false,
  data: JSON.parse(localStorage.getItem('user')) || []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
    case LOG_IN:
      const newData = {data: payload, isLogin: true}
      localStorage.setItem('user', JSON.stringify(payload));
      return newData;
    case LOG_OUT:
      const emptyData = {data: [], isLogin: false}
      localStorage.removeItem('user');
      return emptyData;

  }
}

export default reducer;