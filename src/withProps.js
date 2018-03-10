import React from 'react'

export default (mapStateToProps) => (Component) => (props) => {
	let mapState = {}
	if (mapStateToProps) mapState = mapStateToProps(props)
	return (
		<Component {...props} {...mapState} />
	)
}