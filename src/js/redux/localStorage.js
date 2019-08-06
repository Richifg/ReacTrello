
export const readState = () => {
  try {
    const serializedData = localStorage.getItem('state');
    if (serializedData) {
      const data = JSON.parse(serializedData);
      return { ...data, ui: { color: 'blue', img: null } };
    } return undefined;
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  const data = {
    boards: state.boards, cards: state.cards, lists: state.lists,
  };
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem('state', serializedData);
  } catch (e) {
    throw e;
  }
};

const debounce = (func, delay) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => func.apply(this, args), delay);
  };
};

export const debouncedSaveState = debounce(saveState, 3000);
