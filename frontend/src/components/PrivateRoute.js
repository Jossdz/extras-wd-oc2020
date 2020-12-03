import { Route, Redirect } from "react-router-dom"
import { useContextInfo } from "../hooks/context"

// Un componente simple pero poderoso,
// Es una modificacion al componente Route de react-router-dom
// Que en lugar de solo renderizar consume el contexto para saber si hay un usuario...
// Si existe hace render del componente normalmente, caso contrario, redirie siempre a la raiz
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContextInfo()
  return (
    <Route
      {...rest}
      // este ternario puede ayudarte incluso a verificar si el usuario es de algun rol en particular, paraa ello te
      // recomiendo generar otro componente similar a este pero que revise que exist el usuario y que tenga cierto rol
      render={props => (user ? <Component {...props} /> : <Redirect to='/' />)}
    />
  )
}

export default PrivateRoute
