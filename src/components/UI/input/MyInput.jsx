import React from 'react';
import classes from "./MyInput.module.scss";

const MyInput = ({placeholder, onChange, ...props}) => {
	return (

		<input {...props}
		       onChange={onChange}
		       type="text"
		       className={classes.input}
		       name="input-serach"
		       placeholder={placeholder}/>
	);
};

export default MyInput;
//1 17 15