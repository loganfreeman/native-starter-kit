import type { Action } from "../actions/types";
import { SET_INDEX, GET_LIST. SET_LIST } from "../actions/list";

export type State = {
  list: string
};

const initialState = {
  list: [

  ],
  selectedIndex: undefined
};

export default function(state: State = initialState, action: Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload
    };
  }

  if(action.type == GET_LIST) {
    return function(dispatch) {
      var promise = new Promise(function(resolve, reject) {
        setTimeout(resolve, 1000);
      });

      promise.then(() => {

      })
    }
  }
  return state;
}
