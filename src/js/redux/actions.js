export const ADD_CARD = 'ADD_CARD';
export const MODIFY_CARD = 'MODIFY_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const ADD_LIST = 'ADD_LIST';
export const RENAME_LIST = 'RENAME_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const ADD_BOARD = 'ADD_BOARD';
export const RENAME_BOARD = 'RENAME_BOARD';
export const REMOVE_BOARD = 'DELETE_BOARD';

export const addCard = payload => ({ type: ADD_CARD, payload });
export const modifyCard = payload => ({ type: MODIFY_CARD, payload });
export const removeCards = payload => ({ type: REMOVE_CARD, payload });
export const addList = payload => ({ type: ADD_LIST, payload });
export const renameList = payload => ({ type: RENAME_LIST, payload });
export const removeList = payload => ({ type: REMOVE_LIST, payload });
export const addBoard = payload => ({ type: ADD_BOARD, payload });
export const renameBoard = payload => ({ type: RENAME_BOARD, payload });
export const removeBoard = payload => ({ type: REMOVE_BOARD, payload });
