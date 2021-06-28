import { LOG_IN, LOG_OUT } from './types';

export const userLogin = (user) => ({
  type: LOG_IN, 
  payload: user
})

export const userLogout = () => ({
  type: LOG_OUT,
})

