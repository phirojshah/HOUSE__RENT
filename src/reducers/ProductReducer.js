import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const ProductReducer = (state = { products: [] }, action) => {
  switch (
    action.type //type= three types i.e. product fail,success,request
  ) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
      };

    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        product: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
