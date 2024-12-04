function notificationReducer(state, action) {
	switch (action.type) {
		case "add": {
			return "addNewProduct"
		}
		case "remove": {
			return "deleteProduct"
		}
		case "nothing": {
			return "nothing"
		}
		default: {
			throw new Error(action.type)
		}
	}
}

export default notificationReducer;