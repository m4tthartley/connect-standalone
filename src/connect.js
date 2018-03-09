import React from 'react'

class Lifecycle extends React.Component {
	call(func, ...args) {
		if (this.props[func]) this.props[func](args)
	}

	componentDidMount = (...args) =>this.call('componentDidMount', args)
	componentWillMount = (...args) =>this.call('componentWillMount', args)
	componentWillUnmount = (...args) =>this.call('componentWillUnmount', args)
	componentWillReceiveProps = (...args) => this.call('componentWillReceiveProps', args)
	componentWillUpdate = (...args) =>this.call('componentWillUpdate', args)
	componentDidUpdate = (...args) =>this.call('componentDidUpdate', args)
	shouldComponentUpdate = (...args) =>this.call('shouldComponentUpdate', args)
	componentDidCatch = (...args) =>this.call('componentDidCatch', args)

	render() {
		const {
			componentDidMount,
			componentWillMount,
			componentWillUnmount,
			componentWillReceiveProps,
			componentWillUpdate,
			componentDidUpdate,
			shouldComponentUpdate,
			componentDidCatch,
			...rest
		} = this.props
		return <this.props.component {...rest} />
	}
}

export default (mapStateToProps, mapDispatchToProps) => (Component) => (props) => {
	let mapDispatch = {}
	let mapState = {}
	if (mapDispatchToProps) mapDispatch = mapDispatchToProps(props)
	if (mapStateToProps) mapState = mapStateToProps(props)
	return (
		<Lifecycle component={Component} {...props} {...mapState} {...mapDispatch} />
	)
}