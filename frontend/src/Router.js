import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import Home from "./components/home/Home"
import NotFound from "./components/404/NotFound.js"

const Success = () => <h1>Success Payment</h1>
const Failure = () => <h1>Failure Payment</h1>
const Pending = () => <h1>Pending Payment</h1>
const Profile = () => <h1>Profile </h1>

const Router = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/success' component={Success} />
      <Route exact path='/failure' component={Failure} />
      <Route exact path='/pending' component={Pending} />
      <PrivateRoute path='/profile' component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
