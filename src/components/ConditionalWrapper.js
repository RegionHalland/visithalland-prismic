const ConditionalWrapper = ({ condition, ifWrapper, elseWrapper, children }) =>
	condition ? ifWrapper(children) : elseWrapper(children)

export default ConditionalWrapper
