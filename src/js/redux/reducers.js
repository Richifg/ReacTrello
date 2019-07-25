import {
  ADD_LIST,
  ADD_CARD,
  ADD_BOARD,
} from './actions';

const initialState = {
  boards: {
    temporal: {
      Monday: ['Tarea 1', 'Tarea 2'],
      Tuesday: ['Just one card'],
      'I have no cards :(': [],
    },
  },
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      const { board, list, newCard } = action.payload;
      const updatedList = state.boards[board][list].slice();
      updatedList.push(newCard);
      return Object.assign({}, state, {
        boards: Object.assign({}, state.boards, {
          [board]: Object.assign({}, state.boards[board], {
            [list]: updatedList,
          }),
        }),
      });
    }
    case ADD_LIST: {
      const { board, list } = action.payload;
      const updatedBoard = Object.assign({}, state.boards[board], { [list]: [] });
      return Object.assign({}, state, {
        boards: Object.assign({}, state.boards, { [board]: updatedBoard }),
      });
    }
    case ADD_BOARD: {
      const { board } = action.payload;
      return Object.assign({}, state, { boards: Object.assign({}, state.boards, { [board]: {} }) });
    }
    default: return state;
  }
};

export default rootReducer;
