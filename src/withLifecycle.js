import React from 'react'

class Lifecycle extends React.Component {
	call(func, args) {
		if (this.props[func]) return this.props[func].call(this, ...args)
		else return true
	}

	componentDidMount = (...args) => this.call('componentDidMount', args)
	componentWillMount = (...args) => this.call('componentWillMount', args)
	componentWillUnmount = (...args) => this.call('componentWillUnmount', args)
	componentWillReceiveProps = (...args) => this.call('componentWillReceiveProps', args)
	componentWillUpdate = (...args) => this.call('componentWillUpdate', args)
	componentDidUpdate = (...args) => this.call('componentDidUpdate', args)
	shouldComponentUpdate = (...args) => this.call('shouldComponentUpdate', args)
	componentDidCatch = (...args) => this.call('componentDidCatch', args)

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
			Component,
			...rest
		} = this.props
		return <Component {...rest} />
	}
}

export default (mapDispatchToProps) => (Component) => (props) => {
	let mapDispatch = {}
	if (mapDispatchToProps) mapDispatch = mapDispatchToProps(props)
	return (
		<Lifecycle Component={Component} {...props} {...mapDispatch} />
	)
}