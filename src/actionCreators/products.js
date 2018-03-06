import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE,ADD_PRODUCT,
  ADD_INPUT_CHANGE,PRODUCT_SUCCESS, PRODUCT_FAILURE, EDIT_PRODUCT,EDIT_INPUT_CHANGES,
  EDIT_SUCCESS_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT, DELETE_PRODUCT_FAILURE,
  PAGINATE} from "../actionTypes/products";

export function getProducts() {
    return {
      type: GET_PRODUCTS
    };
}
export function getProductsSuccess(products) {
return {
    type: GET_PRODUCTS_SUCCESS,
    products
};
}
export function getProductsFailure(error) {
  return {
      type: GET_PRODUCTS_FAILURE,
      error
  };
}
  export function addProduct(product) {
    return {
      type: ADD_PRODUCT,
      product
    }
  }
  export function addInputChange(addItem) {
    return {
        type: ADD_INPUT_CHANGE,
        addItem
    };
}

export function editProduct(prod) {
  return {
      type: EDIT_PRODUCT,
      prod
      
  };
}
export function editInputChange(editItem) {
  return {
      type: EDIT_INPUT_CHANGES,
      editItem
  };
}
export function editSuccessProduct(editProducts) {
  return {
      type: EDIT_SUCCESS_PRODUCT,
      editProducts
  };
}
  
export function deleteProduct(prod) {
  return {
      type: DELETE_PRODUCT,
      prod
  };
}
export function deleteProductSuccess(products) {
  return {
      type: DELETE_PRODUCT_SUCCESS,
      products
  };
}
export function deleteProductFailure(error) {
  return {
      type: DELETE_PRODUCT_FAILURE,
      error
  };
}
export function paginate(currentPage) {
  return {
      type: PAGINATE,
      currentPage
  }
}
  export function productSuccess(product) {
    return {
      type: PRODUCT_SUCCESS,
      product
    }
  }
  
  export function productFailure(error) {
    return {
      type: PRODUCT_FAILURE,
      error
    }
  }

