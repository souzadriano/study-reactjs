var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var ControlledMultiple = function (_React$Component) {_inherits(ControlledMultiple, _React$Component);

    function ControlledMultiple(props) {_classCallCheck(this, ControlledMultiple);var _this = _possibleConstructorReturn(this, (ControlledMultiple.__proto__ || Object.getPrototypeOf(ControlledMultiple)).call(this,
        props));
        _this.state = { value: 'apple' };
        _this.handleChange = _this.handleChange.bind(_this);return _this;
    }_createClass(ControlledMultiple, [{ key: "handleChange", value: function handleChange(

        event) {
            this.setState(_defineProperty({}, event.target.name, event.target.value));
        } }, { key: "render", value: function render()

        {
            var array = ["apple", "banana", "carrot", "donuts"];
            var options = array.map(function (item) {return (
                    React.createElement("option", { value: item }, item));});

            return (
                React.createElement("form", null,
                    React.createElement("input", { name: "inputName", type: "input", value: this.state.inputName, onChange: this.handleChange }),
                    React.createElement("textarea", { name: "textAreaName", type: "text", value: this.state.textAreaName, onChange: this.handleChange }),

                    React.createElement("select", { name: "selectName", value: this.state.selectName, onChange: this.handleChange },
                        options),

                    React.createElement("input", { type: "checkbox", checked: this.state.checked, onChange: this.handleChange }),
                    React.createElement("h3", null, this.state.inputName)));


        } }]);return ControlledMultiple;}(React.Component);


ReactDOM.render(
React.createElement(ControlledMultiple, null),
document.getElementById("root"));