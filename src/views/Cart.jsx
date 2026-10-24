import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/userContext";

const Cart = () => {
  const { token } = useContext(UserContext);

  const {
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    total,
  } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div key={producto.id} className="cart-item">
              <img src={producto.thumbnail} alt={producto.title} />

              <h5>{producto.title}</h5>
              <p>${producto.price}</p>

              <div className="cart-btn">
                <p>Cantidad: {producto.cant}</p>

                <button className="btn-contador "  onClick={() => disminuirCantidad(producto)}>-</button>

                <button className="btn-contador " onClick={() => aumentarCantidad(producto)}>+</button>

                <button className="btn-eliminar " onClick={() => eliminarDelCarrito(producto.id)}>
                  Eliminar
                </button>

                <p>Total: ${(producto.price * producto.cant).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <h3>Total a pagar: ${total.toFixed(2)}</h3>
          <button className={token ? "btn btn-pagar" : "btn btn-pagar2"} disabled={!token}>
            {token ? "Pagar" : "Iniciar Sesión"}
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
