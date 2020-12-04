import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import Home from "./components/home/Home"
import NotFound from "./components/404/NotFound.js"
import LayoutApp from "./components/LayoutApp"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

const Success = () => <h1>Success Payment</h1>
const Failure = () => <h1>Failure Payment</h1>
const Pending = () => <h1>Pending Payment</h1>
const Profile = () => <h1>Profile </h1>

const Router = () => (
  <BrowserRouter>
    <LayoutApp>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/success' component={Success} />
        <Route exact path='/failure' component={Failure} />
        <Route exact path='/pending' component={Pending} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute path='/profile' component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </LayoutApp>
  </BrowserRouter>
)

export default Router
