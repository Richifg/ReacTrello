export const updateObj = (obj, keyValue) => (
  Object.assign({}, obj, keyValue)
);

export const deleteFromObj = (obj, key) => {
  const newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
};

export const getNewId = () => `id${Math.floor(Math.random() * 1000)}`;
