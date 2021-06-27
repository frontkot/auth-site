import { TOGGLE_IS_OPEN } from './types';

export const isOpenWindow = (isOpen) => ({
  type: TOGGLE_IS_OPEN, 
  payload: isOpen
})

