import React from 'react';
import MyButton from "./UI/button/MyButton.jsx";

const Product = ({product, remove}) => {
	return (
		<div className="product">
			<div className="product__image">
				<img src={product.image || `https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg`}
				     alt="product"
				/>
			</div>
			<div className="product__content">
				<h3 className="product__title">{product.title}</h3>
				<p className="product__description">{product.description.length > 160 ? product.description.slice(0, 160) + "..." : product.description}</p>
				<p className="product__category">{product.category}</p>
				<div className="product__footer">
					<p className="product__price">{product.price} $</p>
					<MyButton onClick={() => remove(product)}>Delete Product</MyButton>
				</div>
			</div>
		</div>
	);
};

export default Product;