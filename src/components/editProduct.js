import React, { Component } from 'react';

class EditProduct extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
        <fieldset className="addproduct">
        <legend>Edit Product</legend>
        <form>
            <table className="table table-bordered">
                <tbody>
                <tr className="form-group">
                    <td><label>Product Name:</label></td>
                    <td><input type="text" name="productName" onChange={(e)=>{this.props.onChangeEdit(e)}}
        defaultValue={this.props.editProducts.productName} /></td>
                </tr>
                <tr className="form-group">
                    <td><label>Price:</label></td>
                    <td><input type="text" name="price" onChange={(e)=>{this.props.onChangeEdit(e)}}
         defaultValue={this.props.editProducts.price} /></td>
                </tr>
                <tr className="form-group">
                    <td><label>Quantity</label></td>
                    <td><input type="text" name="quantity" onChange={(e)=>{this.props.onChangeEdit(e)}}
         defaultValue={this.props.editProducts.quantity} /></td>
                </tr>
                <tr className="form-group">
                    <td><label>R.O.L</label></td>
                    <td><input type="text" name="rol" onChange={(e)=>{this.props.onChangeEdit(e)}}
         defaultValue={this.props.editProducts.rol} /></td>
                </tr>
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={(e)=>{this.props.onClickEdit(this.props.editProducts)}}>Save</button>
    </form>
  </fieldset>
    );
  }
}

export default EditProduct;
