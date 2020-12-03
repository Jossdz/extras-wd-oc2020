import axios from 'axios'
import isProd from '../utils/isProd'

const baseURL = isProd ? '/api/products' : 'http://localhost:3000/api/product'

const productsService = axios.create({ baseURL })

export const getProduct = () => productsService.get()