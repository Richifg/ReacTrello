export const ADD_CARD = 'ADD_CARD';
export const MODIFY_CARD = 'MODIFY_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const ADD_LIST = 'ADD_LIST';
export const RENAME_LIST = 'RENAME_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const ADD_BOARD = 'ADD_BOARD';
export const RENAME_BOARD = 'RENAME_BOARD';
export const REMOVE_BOARD = 'DELETE_BOARD';

export const addCardAction = payload => ({ type: ADD_CARD, payload });
export const modifyCardAction = payload => ({ type: MODIFY_CARD, payload });
export const removeCardsAction = payload => ({ type: REMOVE_CARD, payload });
export const addListAction = payload => ({ type: ADD_LIST, payload });
export const renameListAction = payload => ({ type: RENAME_LIST, payload });
export const removeListAction = payload => ({ type: REMOVE_LIST, payload });
export const addBoardAction = payload => ({ type: ADD_BOARD, payload });
export const renameBoardAction = payload => ({ type: RENAME_BOARD, payload });
export const removeBoardAction = payload => ({ type: REMOVE_BOARD, payload });
