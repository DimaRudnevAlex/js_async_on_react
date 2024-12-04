import './style/App.scss'
import Header from "./components/Header.jsx";
import AsideBar from "./components/AsideBar.jsx";
import Content from "./components/Content.jsx";
import {useEffect, useReducer, useState} from "react";
import {useSortedSearchProducts} from "./hooks/useSortedSearchProducts.js";
import notificationReducer from "./reducer/notificationReducer.js";
import ProductsService from "./API/ProductsService.js";

const URL = "https://674c0d1154e1fca9290b8674.mockapi.io/photo/collections"

function App() {

	const [products, setProducts] = useState([])
	const [filter, setFilter] = useState({sort: "all", query: ""})
	const sortedAndSearchedProducts = useSortedSearchProducts(products, filter.sort, filter.query)
	const [isLoading, setIsLoading] = useState(false)
	// Для моей логики что после добавления и удаления продукта будет происходить запрос на сервер за новыми данными
	// MockAPI сам задает id, на работу приложения это не влияет, т.к. к ID на прямую я не обращаюсь
	const [update, setUpdate] = useState(true)
	// Я понимаю что Reducer здесь избыточен, но применил ради практики, так же логику появления уведомления о удалении
	// и добавлении товара можно перенести на setUpdate, создал лишнее состояние.
	// Стыдно за такую реализацию уведомления
	const [notification, dispatch] = useReducer(notificationReducer, "")

	const removeProduct = (product) => {
		ProductsService.deleteProductInDatabase(URL, product, dispatch, setUpdate)
	}

	const addProduct = (product) => {
		ProductsService.addProductInDatabase(URL, product, dispatch, setUpdate)
	}

	useEffect(() => {
		setIsLoading(true);
		// Изначально я разрабатывал без пагинации и упор делался на то что, после добавления и удаления товара специально запрашиваюся с БД актуальные данные.
		ProductsService.getAllProducts(URL, setProducts, setIsLoading) //для получения всех товаров
		// MockAPI к сожалению не присылает общую длину массива данных lenght и кол-во оставшихся элементов.
		// Реализацию кнопки еще и пагинации я знаю, просто она не подходит под постоянное обновление данных после удаления и добавления товара
		// Много переделывать придется, я этим займусь на выходных
		// ProductsService.getPaginationOfProducts(URL, setProducts, setIsLoading, setIsMaxContent)

		const timerId = setTimeout(() => {
			dispatch({type: "nothing"})
		}, 4000)

		return () => {
			// Подумать над уведомлялкой
			clearTimeout(timerId)
		}
	}, [update])

	return (
		<>
			<Header filter={filter}
			        setFilter={setFilter}/>

			<AsideBar create={addProduct}
			          notification={notification}/>

			<Content remove={removeProduct}
			         products={sortedAndSearchedProducts}
			         isLoading={isLoading}
			         filter={filter}/>
		</>
	)
}

export default App


