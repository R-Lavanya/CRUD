import React, { Component } from 'react';
import './addproduct.css';

class AddProduct extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (            
        
        <div className="addproduct">
            <label>Add Product</label>          
                <table className="table table-bordered">
                    <tbody>
                    {/* <tr className="form-group">
                        <td><label>ID:</label></td>
                        <td><input type="text" name="id" onChange={(e)=>{this.props.onChangeAdd(e)}}/></td>
                    </tr> */}
                    <tr className="form-group">
                        <td><label>Product Name:</label></td>
                        <td><input type="text" name="productName" onChange={(e)=>{this.props.onChangeAdd(e)}}/></td>
                    </tr>
                    <tr className="form-group">
                        <td><label>Price:</label></td>
                        <td><input type="text" name="price" onChange={(e)=>{this.props.onChangeAdd(e)}}/></td>
                    </tr>
                    <tr className="form-group">
                        <td><label>Quantity</label></td>
                        <td><input type="text" name="quantity" onChange={(e)=>{this.props.onChangeAdd(e)}}/></td>
                    </tr>
                    <tr className="form-group">
                        <td><label>R.O.L</label></td>
                        <td><input type="text" name="rol" onChange={(e)=>{this.props.onChangeAdd(e)}}/></td>
                    </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn-primary" onClick={()=>{this.props.onClickAdd(this.props.addProduct)}} >SAVE </button>
            </div>
    
        );
    }
}
export default AddProduct;
