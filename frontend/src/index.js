import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"
import { CtxProvider } from "./hooks/context"
ReactDOM.render(
  <CtxProvider>
    <Router />
  </CtxProvider>,
  document.getElementById("root")
)

serviceWorker.unregister()
