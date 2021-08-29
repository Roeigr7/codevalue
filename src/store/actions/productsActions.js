export const removeProduct = (id) => ({
  type: 'REMOVE_PRODUCT',
  payload: id,
});

export const updateProduct = (prod) => ({
  type: 'UPDATE_PRODUCT',
  payload: prod,
});

export const addProduct = (prod) => ({
  type: 'ADD_PRODUCT',
  payload: prod,
});
