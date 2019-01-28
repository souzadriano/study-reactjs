var element = React.createElement("h1", null, "Hello World");

ReactDOM.render(
element,
document.getElementById("root"));


var num = 0;

function updateNum() {

  ReactDOM.render(
  React.createElement("div", null, num++),
  document.getElementById("num"));

}

setInterval(updateNum, 2000);

var item = {
  name: "Cheese",
  price: 5 };


function calculateArea(x, y) {
  return x * y;
}


var dinElement =
React.createElement("div", null,
  React.createElement("h1", { className: item.name }, "Hello ", item.name, " (", item.price, ")"),
  React.createElement("h2", { className: "title2" }, calculateArea(2, 3)));




ReactDOM.render(
dinElement,
document.getElementById("din"));


function HelloWorld(props) {
  return (
    React.createElement("div", null,
      React.createElement("h1", null, "Message: ", props.message),
      React.createElement("h1", null, "Message 2: ", props.numberArray[props.index])));


}

ReactDOM.render(
React.createElement(HelloWorld, { index: "3", numberArray: [1, 2, 3, 4, 5], message: "Hello World!" }),
document.getElementById("comp"));