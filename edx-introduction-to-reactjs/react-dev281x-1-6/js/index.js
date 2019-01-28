function Feature(props) {
  if (props.active == true) {
    return React.createElement("h1", null, "This feature is active");
  }
  return React.createElement("h1", null, "This feature is not active");
}

function Feature2(props) {
  if (!props.active) {
    return null;
  }
  return React.createElement("h1", null, props.message);
}

function Feature21(props) {
  return (
    props.active && React.createElement("h1", null, props.message));

}

ReactDOM.render(

React.createElement("div", null,
  React.createElement(Feature, { active: true }),
  React.createElement(Feature2, { active: true, message: "My message 2" }),
  React.createElement(Feature21, { active: true, message: "My message 2.1" })),


document.getElementById("root"));