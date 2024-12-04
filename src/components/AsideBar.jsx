import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton.jsx";
import MyInput from "./UI/input/MyInput.jsx";
import MySelected from "./UI/select/MySelected.jsx";
import Notification from "./UI/notification/Notification.jsx";

const AsideBar = ({create, notification}) => {

	const options = [
		{value: "electronics", name: "ELECTRONICS"},
		{value: "jewelery", name: "JEWELERY"},
		{value: "men's clothing", name: "MEN'S CLOTHING"},
		{value: "women's clothing", name: "WOMEN'S CLOTHING"},
	]

	const [newProduct, setNewProduct] = useState({
		id: "",
		title: "",
		description: "",
		category: "electronics",
		price: "",
		image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
	})

	function onSubmit(e) {
		e.preventDefault();
		const obj = {...newProduct, id: Date.now().toString()};
		create(obj);
		setNewProduct({
			id: "",
			title: "",
			description: "",
			category: "electronics",
			price: "",
			image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
		})
	}

	function onChange(newCategory) {
		setNewProduct({...newProduct, category: newCategory})
	}

	return (
		<div className="aside-bar">
			<h2 className="aside-bar__title">Add new product:</h2>
			<form className="form">
				<MyInput value={newProduct.title}
				         onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
				         placeholder={"Enter your product name..."}/>
				<MyInput value={newProduct.price}
				         onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
				         placeholder={"Enter your product price..."}/>
				<MyInput value={newProduct.description}
				         onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
				         placeholder={"Enter your product desc..."}/>

				<MySelected options={options}
				            value={newProduct.category}
				            onChange={(e) => onChange(e.target.value)}/>

				<MyButton onClick={onSubmit}>ADD</MyButton>
			</form>
			<Notification notification={notification}/>
		</div>
	);
};

export default AsideBar;