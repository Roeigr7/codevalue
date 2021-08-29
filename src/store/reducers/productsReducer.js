import { items } from '../../helpers/productsList';

const initialState = {
  products: items,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const newItem = {
        ...action.payload,
        ID: Math.floor(Math.random() * 100),
        image:
          'https://thumbs.dreamstime.com/b/new-item-sticker-label-editable-vector-illustration-isolated-white-background-new-item-sticker-123424289.jpg',
      };
      return {
        ...state,
        products: [newItem, ...state.products],
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: [
          ...state.products.filter((prod) => prod.ID !== action.payload),
        ],
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: [
          ...state.products.map((item) => {
            if (item.ID !== action.payload.ID) {
              // This isn't the item we care about - keep it as-is
              return item;
            }
            // Otherwise, this is the one we want - return an updated value
            return {
              ...item,
              ...action.payload,
            };
          }),
        ],
      };

    default:
      return state;
  }
};

export default productsReducer;
