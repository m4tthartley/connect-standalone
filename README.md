# React With Props

```
import React from 'react'
import {withProps,withLifecycle} from 'react-with-props'

const View = (props) => (
	<p>Hello {props.hello}!</p>
)

const mapStateToProps = (props) => ({
	hello: 'World',
	data: []
})

const mapDispatchToProps = (props) => ({
	componentDidMount() {
		console.log('mount')
	},
	componentWillReceiveProps(nextProps) {
		console.log('receive props')
	}
})

export default withProps(mapStateToProps)(withLifecycle(mapDispatchToProps)(View))
```