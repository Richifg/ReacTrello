export const updateObj = (obj, keyValue) => (
  Object.assign({}, obj, keyValue)
);

// takes a single key or array of keys and return a new object without them
export const deleteFromObj = (obj, keys) => {
  const newObj = Object.assign({}, obj);
  const arrKeys = Array.isArray(keys) ? keys : [keys];
  for (let i = 0; i < arrKeys.length; i += 1) {
    delete newObj[arrKeys[i]];
  }
  return newObj;
};

export const getNewId = () => Math.random().toString(36).substr(2, 9);
