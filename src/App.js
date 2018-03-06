import React, { Component } from 'react';
import './App.css';
import ProductList from "./components/productList";
import { Route, Switch } from "react-router-dom";
import * as productActions from "./actionCreators/products";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import AddProduct from "./components/addProduct";
import EditProduct from "./components/editProduct";


class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.editProd,"aksjdhflkasdhf");
  }
  componentWillMount() {
    this.props.actions.getProducts();
  }  
  handleInputChangeAdd=(e)=>{
    console.log("onchange")
    const name=e.target.name;
    const value=e.target.value;
    const addItem={};
     addItem[name]=value;
    this.props.actions.addInputChange(addItem);
  }
  handleAddClick=(product)=>{
    this.props.actions.addProduct(product);
    window.location.href='/';
  }
  handleEdit=(prod)=>{
    this.props.actions.editProduct(prod);
  }
  handleEditChanges=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    const editItem={};
    editItem[name]=value;
    this.props.actions.editInputChange(editItem);
  }
  handleEditClick=(editProducts)=>{
    this.props.actions.editSuccessProduct(editProducts);   
    window.location.href='/';
  }
  handleDelete=(prod)=>{
    this.props.actions.deleteProduct(prod);
    window.location.href='/';
  }
  handlePagination = (num) => {
    this.props.actions.paginate(num);
  }
  render() {
    return (
      <div className="App">
       <Switch>
          <Route
          exact
            path="/"
            render={props =>
              this.props.isLoading ? (
                <p>Loading...</p>
              ) : (
                <ProductList
                  {...props}
                  products={this.props.products}     
                  handleEdit={this.handleEdit}    
                  onDelete={this.handleDelete}      
                  handlePaginateClick={this.handlePagination}
                  currentPageNum={this.props.currentPageNumber}
                  contentNumber={this.props.pageContentNumber}
                />
              )
            }
          />
          <Route      
      path="/add-product"
      render={props =>
          <AddProduct
            {...props}
            addProduct={this.props.addProduct}
            onChangeAdd={this.handleInputChangeAdd}
            onClickAdd={this.handleAddClick}
          />      
        }
      />
        <Route            
            path="/edit-product"
            render={props =>
                <EditProduct
                  {...props}
                  editProducts={this.props.editProduct}
                  onChangeEdit={this.handleEditChanges}
                  onClickEdit={this.handleEditClick}
                />
            }
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    isLoading: state.isLoading,
    addProduct:state.addProduct,
    editProduct:state.editProduct,
    currentPageNumber: state.currentPage,
    pageContentNumber: state.contentPerPage
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
