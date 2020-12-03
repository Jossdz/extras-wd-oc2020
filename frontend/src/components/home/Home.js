import { useState, useEffect, useRef } from 'react';
import { getProduct } from '../../services/products'

// Quiza se torna un poco mas complejo integrar mercadopago pero les dejo la explicacion linea por linea,
// En el backend todo igual, el endpoint de detalle de un producto envia la informaci'on del producto pero tambien 
// la informacion del ID de la preferencia de MP

// Es importante que recuerden que MP funciona bien cuando se genera el HTML, pero en este caso tenemos una SPA
// Y en react es diferente la manipulacion del dom

// Para react la manipulacion del dom se hace con una Referencia, usaremos el hook useRef para que en esa referencia
// se almacene el elemento del DOM que definimos en la linea 45 (las referencias son un objeto 
// mutable que tienen una propiedad current donde se almacena el valor actual), para que cuando el id de la preferencia llegue,
// Generamos mediante manipulacion del dom el script necesario con los atributos que pide MP y le hacemos append a 
// ese elemento del dom el script como hijo

function Home() {
  const [product, setProduct] = useState(null)
  // Creamos la referencia sin un parametro en el hook use Ref, inicialmente no tiene valor, 
  // Una vez que se asigna a un elemento de jsx como prop ref ese elemento se almacena 
  // en la propiedad current de la referencia vease el console log de la linea: 
  const paymentContainereRef = useRef()

  // Agregamos un efecto no solo para obtener la informacion del producto pero tambien para 
  // Agregar como hijo al elemento de nuestra referencia un script generado con la API del DOM (document.createElement)
  useEffect(async () => {
    const { data: product } = await getProduct()

    // Generamos el script que nos pide mercado pago pero a mano con createElement
    const script = document.createElement("script");

    // Agregamos los atributos que el script requiere
    script.src = "https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js";
    script.setAttribute('data-preference-id', product.prefId)
    // hacemos appendChiold de nuestro script recien generado a nuestro elemento con la referencia
    paymentContainereRef.current.appendChild(script);

    setProduct(product);
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre>
      {/* asignamos la referencia al elemento que queremos que contenga el boton de mercadopago (que lo trae nuestro script) */}
      <div ref={paymentContainereRef}></div>
    </div>
  );
}

export default Home;
