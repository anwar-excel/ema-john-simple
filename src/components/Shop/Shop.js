import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleAddToCart = (product) => {
        // console.log(product.name);
        console.log('clicked');
        console.log(product.name);
        console.log(product);
    }
    return (
        <div className="shop-container">

            <div className="product-container">
                <h2>Products:{products.length} </h2>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h5>Items Orders</h5>
            </div>
        </div>
    );
};

export default Shop;