import {PICK_UP_REQUEST, RELEASE_REQUEST} from '../actions/types';

const requestReducer = (state: any, action) => {
  switch (action.type) {
    case PICK_UP_REQUEST:
      return [...state, action.payload];

    case RELEASE_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default requestReducer;
