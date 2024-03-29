import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import UserProfile from "./UserProfile";
import UserHomePage from "./UserHomePage";
import SignUp from "./SignUp";
import RestaurantPage from "./RestaurantPage/RestaurantPage"
import VisitorHomePage from "./VisitorPages/VisitorHomePage"
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import GiftShopPage from './GiftShopPage/GiftShopPage';
import VisitorUserProfile from './VisitorPages/VisitorUserProfile';
import VisitorMoney from './VisitorPages/VisitorMoney';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */
function Routes()
{
  return(
      <Router>
        <Switch>
          <Route path = "/" exact component={Login}></Route>
          <Route path = "/login" exact component={Login}></Route>
          <Route path = "/signup" exact component={SignUp}></Route>
          <Route path = "/homepage" exact component={UserHomePage}></Route>
          <Route path = "/profile" exact component={UserProfile}></Route>
          <Route path = "/restaurant" exact component={RestaurantPage}></Route>
          <Route path = "/visitorhomepage" exact component={VisitorHomePage}></Route>
          <Route path = "/giftshop" exact component={GiftShopPage}></Route>
          <Route path = "/visitorprofile" exact component={VisitorUserProfile}></Route>
          <Route path = "/visitormoney" exact component={VisitorMoney}></Route>

        </Switch>
      </Router>
  );
}

export default Routes;
