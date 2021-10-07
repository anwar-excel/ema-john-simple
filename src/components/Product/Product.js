import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By:{seller}</small></p>
                <p>Price:{price}</p>
                <p><small>only{stock} left in stock - order </small></p>
                <button className="btn-regular">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;