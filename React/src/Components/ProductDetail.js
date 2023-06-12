import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import { NavLink } from 'react-router-dom';

function ProductDetail() {
    const { objectID } = useParams();
    const [product, setProduct] = useState(null);
    // Get ID from URL
    // Store product data

    useEffect(() => {
        fetchProduct();
    }, [objectID]);

    // Fetch products from endpoint, store products using SetProducts
    // Find product based on its objectID, make sure it matches
    const fetchProduct = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Claaireey12/GSINFO/main/gsinfo.json?token=GHSAT0AAAAAACDTBSXXZ6PJZP5W7CDDZNT6ZD745XA');
            const data = await response.json();
            const product = data.hits.find((p) => p.objectID === objectID);
            setProduct(product);
        } catch (error) {
            console.log('Error fetching product:', error);
        }
    };

    // If no data found
    if (!product) {
        return <div>No products found</div>;
    }

    // Render product info, map through media and display images, if sizes in stock show buttons else show out of stock message
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
                <h2>{product.title}</h2>
                <div className={styles.imageContainer}>
                    {product.media.map((image) => (
                        <img key={image.id} src={image.src} alt="Product" className={styles.image} />
                    ))}
                </div>
                <div className={styles.info} >
                    <p><strong>{product.colour} | £{product.price}</strong></p>
                    <div className={styles.sizeButtons}>
                        {product.sizeInStock ? (
                            product.sizeInStock.map((size) =>
                                size ? (
                                    <button key={size} className={styles.sizeButton}>{size.toUpperCase()}</button>
                                ) : (
                                    <p key="out-of-stock" className={styles.outOfStock}>Out of Stock</p>
                                )
                            )
                        ) : (
                            <p className={styles.outOfStock}>Out of Stock</p>
                        )}
                    </div>
                    <button
                        className={styles.addButton}
                    >
                        Add to basket
                    </button>
                    <hr></hr>
                    <div>
                        <p className={styles.description} dangerouslySetInnerHTML={{ __html: product.description }}></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
