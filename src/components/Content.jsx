import React from 'react';
import Product from "./Product.jsx";
import FullLoader from "./UI/contentLoader/Skeleton.jsx";
import MyButton from "./UI/button/MyButton.jsx";


const Content = ({products, remove, isLoading, filter}) => {

	function foo() {
		if (products.length) {
			return (
				<>
					{products.map((product) => (<Product key={product.id}
					                                     product={product}
					                                     remove={remove}/>))}
					{filter.sort === "all" && filter.query === "" && <MyButton>Show more</MyButton>}
				</>
			)
		}
		return (<h2>Products not found</h2>)
	}

	return (
		<main className="content">
			{(isLoading)
				? (<FullLoader/>)
				: (foo())
			}
		</main>
	);
};

export default Content;