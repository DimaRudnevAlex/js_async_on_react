import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
	<ContentLoader
		speed={1.5}
		width={505}
		height={300}
		viewBox="0 0 505 300"
		backgroundColor="#b0b0b0"
		foregroundColor="#3f3f5a"
		{...props}
	>
		<rect x="136" y="307" rx="15" ry="15" width="67" height="11" />
		<rect x="227" y="83" rx="15" ry="15" width="280" height="125" />
		<rect x="227" y="235" rx="15" ry="15" width="212" height="20" />
		<rect x="227" y="11" rx="15" ry="15" width="280" height="47" />
		<rect x="2" y="7" rx="15" ry="15" width="187" height="289" />
		<rect x="227" y="271" rx="15" ry="15" width="123" height="23" />
	</ContentLoader>
)

const FullLoader = () => {
	return (
		<>
			<MyLoader/>
			<MyLoader/>
			<MyLoader/>
			<MyLoader/>
			<MyLoader/>
			<MyLoader/>
		</>
	)
};

export default FullLoader;