import {PICK_UP_REQUEST, RELEASE_REQUEST} from './types';

export const pickUpRequest = (payload: any) => {
  return {
    type: PICK_UP_REQUEST,
    payload,
  };
};

/* export const removeItem = (item) => (dispatch) => {
  dispatch({
    type: RELEASE_REQUEST,
    payload: item,
  });
}; */
