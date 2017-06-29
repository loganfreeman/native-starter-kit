
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';

export const GET_LIST = 'GET_LIST';

export const SET_LIST = 'SET_LIST';

export function setIndex(index:number):Action {
  return {
    type: SET_INDEX,
    payload: index,
  };
}

export function getList():Action {
  return {
    type: GET_LIST
  }
}


export function setList(list):Action {
  return {
    type: SET_LIST,
    payload: list
  }
}
