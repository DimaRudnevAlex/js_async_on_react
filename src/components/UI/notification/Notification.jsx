import React from 'react';
import classes from './Notification.module.scss';

const Notification = ({notification}) => {
	const value = {};
	if(notification === "addNewProduct") {
		value.cl = `${classes.notification} ${classes.active}`
		value.text = "Add New Product!!!";
	} else if (notification === "deleteProduct") {
		value.cl = `${classes.notification} ${classes.active}`
		value.text = "Delete Product!!!";
	} else {
		value.cl = `${classes.notification}`
	}


	return (
		<div className={`${value.cl}`}>
			{value.text}
		</div>
	);
};

export default Notification;