import { GET_PRODUCTS, ADD_PRODUCT, EDIT_SUCCESS_PRODUCT, DELETE_PRODUCT} from "../actionTypes/products";
import { put, takeLatest } from "redux-saga/effects";
import { getProductsSuccess, getProductsFailure, productSuccess, productFailure} from "../actionCreators/products";

function* getProducts() {
    try {
      let products = yield fetch("http://localhost:4000/products").then(r =>
        r.json()
      );            
      console.log(products,"products");
      yield put(getProductsSuccess(products));
    } catch (error) {
      yield put(getProductsFailure(error));
    }
  }

  function* addProduct(action) {
    try {
        let products = yield fetch("http://localhost:4000/products").then(r =>
        r.json()
      ); 
      action.product.id = Number(products[products.length - 1].id) + 1;
      console.log(action.product);
        let product = yield fetch("http://localhost:4000/products", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.product)
        }).then(result => result.json());        
        yield put(productSuccess(product));
    }
    catch (error) {
        yield put(productFailure(error));
    }
}

function* editSuccessProduct(action) {
  try {
      let product = yield fetch(`http://localhost:4000/products/${action.editProducts.id}`, {
          method: 'PUT',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(action.editProducts)
      }).then(result => result.json());
      yield put(productSuccess(product));
  }
  catch (error) {
      yield put(productFailure(error));
  }
}
  
function* deleteProduct(action) {
  try {
      let product = yield fetch(`http://localhost:4000/products/${action.prod.id}`, {
          method: 'DELETE'
      }).then(result => result.json());
      yield put(productSuccess(product));
  }
  catch (error) {
      yield put(productFailure(error));
  }
}

  export function* getProductsWatcher() {
    yield [takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(ADD_PRODUCT, addProduct),
    takeLatest(EDIT_SUCCESS_PRODUCT, editSuccessProduct),
    takeLatest(DELETE_PRODUCT, deleteProduct)];
  }