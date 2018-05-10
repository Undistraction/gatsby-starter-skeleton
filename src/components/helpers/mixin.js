const mixin = f => (...rest) => props => f(props.theme.api, props)(...rest)

export default mixin
