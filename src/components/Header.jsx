import React from 'react';
import MyInput from "./UI/input/MyInput.jsx";
import MySelected from "./UI/select/MySelected.jsx";

const Header = ({filter, setFilter}) => {
	const options = [
			{value: "all", name: "ALL"},
			{value: "electronics", name: "ELECTRONICS"},
			{value: "jewelery", name: "JEWELERY"},
			{value: "men's clothing", name: "MEN'S CLOTHING"},
			{value: "women's clothing", name: "WOMEN'S CLOTHING"},
]

	return (
		<header className="header">
			<div className="container">
				<div className="header__logo-text">D&A</div>
				<div className="header__action">
					<MyInput  value={filter.query} placeholder="Search" onChange={(e) => setFilter({...filter, query: e.target.value})} />
					<MySelected options={options} value={filter.sort} onChange={(e) => setFilter({...filter, sort: e.target.value})}/>
				</div>
			</div>
		</header>
	);
};

export default Header;