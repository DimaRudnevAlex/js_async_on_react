export default class ProductsService {
	static page = 0;
	static limit = 6;

	static async getAllProducts(URL, setProducts, setIsLoading) {
		try {
			const response = await fetch(URL, {
				method: 'GET',
				headers: {'content-type': 'application/json'}
			})
			if (response.status === 200) {
				const data = await response.json()
				setProducts(data)
				setIsLoading(false);
			} else {
				throw new Error("Something went wrong!!!")
			}
		} catch (error) {
			alert(error.message)
		}
	}

	static async addProductInDatabase(URL, product, dispatch, setUpdate) {
		fetch(URL, {
			method: 'POST',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify(product)
		}).then(res => {
			if (res.ok) {
				// Подумать стоит ли сбрасывать поиск по имени после добавления товара
				// setFilter({...filter, query: ""})
				dispatch({
					type: "add"
				})
				setUpdate(prev => !prev)
				return;
			}
			throw new Error("Error, the product was not added")
		}).catch(error => {
			alert(error.message)
		})
	}

	static async deleteProductInDatabase(URL, product, dispatch, setUpdate) {
		fetch(`${URL}/${product.id}`, {
			method: 'DELETE',
		}).then(res => {
			if (res.ok) {
				dispatch({
					type: "remove"
				})
				setUpdate(prev => !prev)
				return;
			}
			throw new Error("Error, the product has not been deleted")
		}).catch(error => {
			alert(error.message)
		})
	}

	static async getPaginationOfProducts(URL, setProducts, setIsLoading, setIsMaxContent) {
		try {
			const response = await fetch(`${URL}?limit=${this.limit}&page=${this.page++}`, {
				method: 'GET',
				headers: {'content-type': 'application/json'}
			})
			if (response.status === 200) {
				const data = await response.json()
				if (data.length > 0) {
					setProducts(prev => [...prev, ...data])
				} else {
					setIsMaxContent(prev => !prev)
				}
				setIsLoading(false);

			} else {
				throw new Error("Something went wrong!!!")
			}
		} catch (error) {
			alert(error.message)
		}
	}

}