import React from "react"
import ReactDOM from "react-dom"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"
import { CtxProvider } from "./hooks/context"
import "antd/dist/antd.compact.css"
import "antd/dist/antd.dark.css"
ReactDOM.render(
  <CtxProvider>
    <Router />
  </CtxProvider>,
  document.getElementById("root")
)

serviceWorker.unregister()
