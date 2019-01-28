var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Counter = function (_React$Component) {_inherits(Counter, _React$Component);
    function Counter(props) {_classCallCheck(this, Counter);var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this,
        props));
        _this.state = {
            foo: 123,
            bar: 456,
            message: "initial message",
            value: 0 };return _this;

    }_createClass(Counter, [{ key: "componentDidMount", value: function componentDidMount()
        {
            this.setState({ message: "new message" });

            //The setState() method does not immediately update the state of the component
            this.setState({ value: this.state.value + 1 });
            this.setState({ value: this.state.value + 1 });
            this.setState({ value: this.state.value + 1 });
            this.setState({ value: this.state.value + 1 });

            //The method updates the state asynchronously, so a there is an option callback that will be called once the state has finished updating completely.
            this.setState(function (prevState, props) {
                return { message: prevState.message + '!' };
            });
        } }, { key: "render", value: function render()
        {
            return (
                React.createElement("div", null,
                    React.createElement("div", null, "foo: ", this.state.foo, " bar: ", this.state.bar),
                    React.createElement("div", null, "Message: ", this.state.message),
                    React.createElement("div", null, "Value: ", this.state.value)));


        } }]);return Counter;}(React.Component);


ReactDOM.render(
React.createElement(Counter, null),
document.getElementById("root"));