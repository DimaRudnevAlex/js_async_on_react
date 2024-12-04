import React from 'react';
import classes from "./MySelected.module.scss";

const MySelected = ({options, value, onChange}) => {
	return (

		<select value={value}
		        onChange={onChange}
				className={classes.select}>
			{options.map((option) => {
				return <option key={option.value}
				               value={option.value}>{option.name}</option>;
			})}
		</select>

	);
};

export default MySelected;