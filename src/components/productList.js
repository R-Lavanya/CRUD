import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';

class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = (e) => {
        const num = Number(e.target.id);
        this.props.handlePaginateClick(num);
    }
    
    TableRow = (prod) => {
        return (
            <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.productName}</td>
                <td>{prod.price}</td>
                <td>{prod.quantity}</td>
                <td>{prod.rol}</td>
                <td><Link to="/edit-product"><button type="button" className="btn btn-primary" 
                        style={{marginRight: 10}} onClick={() => { this.props.handleEdit(prod)}}>Edit</button></Link>
                    <button type="button" className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.onDelete(prod)} }}>x</button>
                </td>
            </tr>
        )
    }
      Table = (currentTodos) => {
        return (                
            <table border="1" className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>R.O.L</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                {currentTodos.map(prod => {
                    return this.TableRow(prod);
                })}
                </tbody>
            </table>
        )
      }
      tableDisplay = (products, currentPageNum, contentNumber) => {
        const indexOfLastTodo = currentPageNum * contentNumber;
        const indexOfFirstTodo = indexOfLastTodo - contentNumber;
        const currentTodos = products.slice(indexOfFirstTodo,
            indexOfLastTodo);
        return (
            this.Table(currentTodos)
        )
    }
    paginate = (products, contentNumber) => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / contentNumber); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });
        return (
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        )
    }
    render() {
        return (
            <div  className="container">
                <h1>Product List</h1>      
                <Link to="/add-product"><button type="button" className="btn btn-primary" style={{float: "left", marginBottom: 20}}>Add new product</button></Link>
                <div className="asd">
                    {this.tableDisplay(this.props.products, this.props.currentPageNum, this.props.contentNumber)}
                    {this.paginate(this.props.products, this.props.contentNumber)}
                </div>
            </div>
        )
    }
    }

export default ProductList;