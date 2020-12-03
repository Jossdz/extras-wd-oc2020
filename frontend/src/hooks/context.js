import { useState, createContext, useContext } from "react"

const AppCtx = createContext()

export const CtxProvider = props => {
  //Para ver el comportamiento de la ruta privada, cambia a true el valor de inicio del state
  const [user, setUser] = useState(null)

  const loginUser = user => setUser(user)
  const logoutUser = _ => setUser(null)

  const value = {
    user,
    loginUser,
    logoutUser
  }

  return <AppCtx.Provider {...props} value={value} />
}

export const useContextInfo = () => {
  const ctx = useContext(AppCtx)
  return ctx
}
