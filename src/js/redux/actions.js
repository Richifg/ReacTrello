// board actions
export const CREATE_BOARD = 'CREATE_BOARD';
export const MODIFY_BOARD = 'MODIFY_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

export const createBoardAction = payload => ({ type: CREATE_BOARD, payload });
export const modifyBoardAction = payload => ({ type: MODIFY_BOARD, payload });
export const deleteBoardAction = payload => ({ type: DELETE_BOARD, payload });


// list actions

export const CREATE_LIST = 'CREATE_LIST';
export const MODIFY_LIST = 'MODIFY_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export const createListAction = payload => ({ type: CREATE_LIST, payload });
export const modifyListAction = payload => ({ type: MODIFY_LIST, payload });
export const deleteListAction = payload => ({ type: DELETE_LIST, payload });


// card actions

export const CREATE_CARD = 'CREATE_CARD';
export const MODIFY_CARD = 'MODIFY_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const createCardAction = payload => ({ type: CREATE_CARD, payload });
export const modifyCardAction = payload => ({ type: MODIFY_CARD, payload });
export const deleteCardAction = payload => ({ type: DELETE_CARD, payload });

// misc actions

export const UPDATE_COLOR = 'UPDATE_COLOR';

export const updateColorAction = payload => ({ type: UPDATE_COLOR, payload });
