const mp = require('mercadopago')

mp.configure({
  access_token: process.env.MP_TOKEN
})

module.exports = mp