import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import { NavLink } from 'react-router-dom';


function Products() {
    const [products, setProducts] = useState([]);
// Empty until updated with products
   
    useEffect(() => {
        fetchProducts();
    }, []);
    // Fetch product after render

    // Fetch products from endpoint, store products using SetProducts
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Claaireey12/GSINFO/main/gsinfo.json?token=GHSAT0AAAAAACDTBSXXZ6PJZP5W7CDDZNT6ZD745XA');
            const data = await response.json();
            setProducts(data.hits);
        } catch (error) {
            console.log('Error fetching products:', error);
        }
    };

    // For each product in products render a card with info
    // Set nav link with objectID of product
    // Index using as unique key for each product
    return (
        <div>
            <nav className={styles.breadcrumbs}>
                <ul>
                    <li>
                        <NavLink to="/">Womens &#x2192;</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Gym Leggings</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.productContainer}>
                {products.map((product, index) => (
                    <div key={index} className={styles.card}>
                        <img src={product.featuredMedia.src} alt="Product" className={styles.image} />
                        <p className={styles.description}>{product.title}</p>
                        <p className={styles.colour}>{product.colour}</p>
                        <p className={styles.price}>£{product.price}</p>
                        <NavLink to={`/products/${product.objectID}`} className={styles.viewDetailsButton}>
                            View Details
                        </NavLink>

                    </div>
                ))}
            </div>
        </div>
    );
}



export default Products;
