const INITIAL_STATE = {
  products_list: [],
  sum_list: [],
  transaction_list: [],
};

export const productReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      console.log("get product reducers", action.payload);
      return {
        ...state,
        products_list: action.payload,
      };
    case "GET_TRANSACTION":
      console.log("get transaction reducers", action.payload);
      return {
        ...state,
        transaction_list: action.payload,
      };
    default:
      return state;
  }
};
