import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers } from "redux";
import { BrowserRouter, Route, Link, NavLink, Redirect, Switch, Prompt } from "react-router-dom";

const Home = () => <div>Home</div>;
const Error = () => <div>Invalid user</div>;
const About = (props) => {
  console.log(props.match)
  // Object {path: "/about", url: "/about", isExact: true, params: Object}
  console.log(props.location)
  // Object {pathname: "/about", search: "", hash: "", state: undefined}
  console.log(props.history)
  // Object {length: 1, action: "POP", location: Object}
  return (
    <div>
      About
    </div>
)}
const AllUsers = () => {
  return (
    <div>
      Show All Users:
      <ul>
        <li>abc</li>
        <li>def</li>
        <li>ghi</li>
      </ul>
    </div>
  );
};

const Users = ({ match, location, history }) => {
  const validUsers = ["abc", "123"];
  if (!validUsers.includes(match.params.id)) 
    return <Redirect to="/error"/>
  
  return (
    <div>
      <div>Match: {JSON.stringify(match)}</div>
      <div>Match Param: {match.params.id}</div>
      <div>Location: {JSON.stringify(location)}</div>
      <div>History: {JSON.stringify(history)}</div>
    </div>
  )
}

const Info = ({match}) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/phone"}>Phone</Link>
        </li>
        <li>
          <Link to={match.url + "/email"}>Email</Link>
        </li>
        <li>
          <Link to={match.url + "/address"}>Address</Link>
        </li>
      </ul>
      <Route
        path={match.url + "/phone"}
        render={props => <div>Phone: 123 456 7890</div>}
      />
      <Route
        path={match.url + "/email"}
        render={props => <div>Email: email@email.com</div>}
      />
      <Route
        path={match.url + "/address"}
        render={props => <div>Address: 123 Address</div>}
      />
    </div>
  );
}

const DefaultRoute = () => <div>Default Route</div>;

const activeEvent = (match, location) => {
  if (!match) {
    return false
  }
  //do something
  console.log("active on : " + match.url)
}

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={{color:'red'}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" isActive={activeEvent}>About</NavLink>
        </li>
        <li>
          <Link to="/users/all">All Users</Link>
        </li>
        <li>
          <Link to="/users/123">User 123</Link>
        </li>
        <li>
          <Link to="/users/zzz">Invalid user zzz</Link>
        </li>
        <li>
          <NavLink to="/info" activeStyle={{color:'yellow'}}>Info</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect path="/home" to="/" />
        <Route path="/about" component={About} />
        <Route path="/users/all" component={AllUsers} />
        <Route path="/users/:id" component={Users} />
        <Route path="/info" component={Info} />
        <Route path="/error" component={Error} />
        <Route component={DefaultRoute} />
      </Switch>
      <Prompt when={true} message="Are sure you want to leave?"/>
    </div>
  </BrowserRouter>
);



//action creators
const addItem = (name, price) => {
  return {
    type: "ADD_ITEM",
    item: {
      name: name,
      price: price
    }
  };
};

const deleteItem = index => {
  return {
    type: "DELETE_ITEM",
    index: index
  };
};

const setFilter = filter => {
  return {
    type: "SET_FILTER",
    filter: filter
  };
};
const setDiscount = discount => {
  return {
    type: "SET_DISCOUNT",
    discount: discount
  };
};

//reducer
var initialState = {
  items: [],
  filter: "none",
  discount: 0
};

const giantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, { items: [...state.items, action.item] });
    case "DELETE_ITEM":
      return Object.assign({}, state, {
        items: [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ]
      });
    case "SET_FILTER":
      return Object.assign({}, state, {
        filter: action.filter
      });
    case "SET_DISCOUNT":
      return Object.assign({}, state, {
        discount: action.discount
      });
  }
};

//store
//var store = createStore(giantReducer);

//items reducer

const items = (state = [], action) => {
  //notice default state is now an array
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "DELETE_ITEM":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
};

const filter = (state = "none", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const discount = (state = 0, action) => {
  switch (action.type) {
    case "SET_DISCOUNT":
      return action.discount;
    default:
      return state;
  }
};

const giantReducer2 = (state = initialState, action) => {
  //don't need an initial state anymore if the child reducers all have initial states
  return {
    items: items(state.items, action),
    filter: filter(state.filter, action),
    discount: discount(state.discount, action)
  };
};

var reducer = combineReducers({ items, filter, discount });
var store = createStore(reducer);

// var store = createStore(reducer);

console.log(store.dispatch(addItem("apple", 1)));
console.log(store.dispatch(addItem("banana", 2)));
console.log(store.dispatch(addItem("carrot", 3)));
console.log(store.dispatch(setFilter("alphabetical")));
console.log(store.dispatch(setDiscount(20)));

//dispatching actions
console.log(store.getState());

const unsub = store.subscribe(() => {
  console.log(store.getState());
})


export default App;