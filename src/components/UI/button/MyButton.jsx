import React from 'react';
import classes from "./MyButton.module.scss";

const MyButton = ({children, onClick, ...props}) => {
	return (
		<button {...props} onClick={onClick} className={classes.button}>
			{children}
		</button>
	);
};

export default MyButton;