import {useMemo} from "react";

export const useSortedProducts = (products, sort) => {
	const sortedProducts = useMemo(() => {
		return products.filter((product) => {
			if (sort === "all") return true
			return product.category === sort
		})
	}, [sort, products])

	return sortedProducts;
}

export const useSortedSearchProducts = (products, sort, query) => {
	const sortedProducts = useSortedProducts(products, sort)

	const sortedAndSearchedProducts = useMemo(() => {
		return sortedProducts.filter((p) => {
			return p.title.toLowerCase().includes(query.toLowerCase())
		})
	}, [query, sortedProducts])

	return sortedAndSearchedProducts;
}