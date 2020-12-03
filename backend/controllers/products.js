const mp = require('../config/mercadopago')

exports.procutDetail = async (req, res) => {
  const prod = {
    title: 'Mi producto',
    unit_price: 100,
    quantity: 1,
  }
  let preference = {
    items: [
      prod
    ],
    // Esta vez, ya que tenemos una SPA no necesitamos poner el form con el action redirigiendo 
    // a donde el usuario debe ir cuando el pago sea exitoso
    // este vez podemos agregar estos links que ayudan a redirigir en el front, una vez un pago es exitoso.
    "back_urls": {
      "success": "http://localhost:3001/success",
      "failure": "http://localhost:3001/failure",
      "pending": "http://localhost:3001/pending"
    }
  };

  const { body: { id } } = await mp.preferences.create(preference)
  prod.prefId = id
  res.status(200).json(prod)
}