import axios from "axios"
let baseURL

process.env.NODE_ENV === "production"
  ? (baseURL = "/auth")
  : (baseURL = "http://localhost:3000/auth")

const service = axios.create({ baseURL, withCredentials: true })

export const signup = user => service.post("/signup", user)

export const login = user => service.post("/login", user)

export const logOut = _ => service.get("/logout")

export const profile = _ => service.get("/profile")
