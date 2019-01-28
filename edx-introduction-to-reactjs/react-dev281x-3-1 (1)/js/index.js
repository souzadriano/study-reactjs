var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function ListItem(props) {
  //don't need to add a key to 
  return React.createElement("li", null, "Product: ", props.product, " | Price: $", props.price, "  ");

}var


ProductList = function (_React$Component) {_inherits(ProductList, _React$Component);function ProductList() {_classCallCheck(this, ProductList);return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));}_createClass(ProductList, [{ key: "render", value: function render()
    {
      var elements = array.map(function (item, index) {
        //need to add a key here
        return React.createElement(ListItem, { key: item.id, product: item.product, price: item.price });
      });

      return (
        React.createElement("ol", null,
          elements));



    } }]);return ProductList;}(React.Component);



var array = [
{ id: 100, product: "Apple", price: 3 },
{ id: 101, product: "Banana", price: 1 },
{ id: 102, product: "Carrot", price: 2 },
{ id: 103, product: "Donuts", price: 5 },
{ id: 104, product: "Eggplant", price: 4 }];


ReactDOM.render(
React.createElement(ProductList, { productArray: array }),
document.getElementById('root'));