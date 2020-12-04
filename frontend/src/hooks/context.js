import { useState, createContext, useContext, useEffect } from "react"
import { profile, logOut } from "../services/auth"

const AppCtx = createContext()

export const CtxProvider = props => {
  //Para ver el comportamiento de la ruta privada, cambia a true el valor de inicio del state
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUserSession() {
      const {
        data: { user }
      } = await profile()
      loginUser(user)
    }

    getUserSession()
  }, [])

  const loginUser = user => setUser(user)
  const logoutUser = async _ => {
    await logOut()
    setUser(null)
  }

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
