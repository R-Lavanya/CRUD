import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, ADD_INPUT_CHANGE, EDIT_INPUT_CHANGES,EDIT_PRODUCT,
    DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, PAGINATE } from "../actionTypes/products";


export default (prevState = { products: [], addProduct :{},editProduct:{},currentPage: 1,
    contentPerPage: 10}, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...prevState,
                isLoading: true
            };
        case GET_PRODUCTS_SUCCESS:
            return {
            ...prevState,
            isLoading: false,
            products: action.products
            };
        case ADD_INPUT_CHANGE:
        return{
            ...prevState,
            addProduct:{...prevState.addProduct,...action.addItem}
        }
        case EDIT_PRODUCT:
        return{
            ...prevState,
            editProduct:{...action.prod}

        }
        case EDIT_INPUT_CHANGES:
        return{
            ...prevState,
            editProduct:{...prevState.editProduct,...action.editItem}
        }
        case DELETE_PRODUCT:
        return{
            ...prevState
        }
        case DELETE_PRODUCT_SUCCESS:
        return{
            ...prevState,
            products:action.products
        }
        case PAGINATE:
            return {
                ...prevState,
                currentPage: action.currentPage
            }
        default:
            return prevState;
    }
};
