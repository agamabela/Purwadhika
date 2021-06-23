import axios from "axios";

export const getProductAction = (data) => {
  return {
    type: "GET_PRODUCTS",
    payload: data,
  };
};

export const getTransAction = (data) => {
  return {
    type: "GET_TRANSACTION",
    payload: data,
  };
};
