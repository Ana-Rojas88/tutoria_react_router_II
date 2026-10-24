import { useContext } from "react";
import { useApiContext } from "../context/ApiContext";
import { CartContext } from "../context/CartContext";
import EjemploNavigate from "../components/EjemploNavigate";
import { useNavigate } from "react-router-dom";

const Home = () => {

    //Paso 3: Consumir un contexto
  const { productos } = useApiContext()
  const { agregarAlCarrito} = useContext(CartContext)

  const navigate = useNavigate()

  return (
    <main className="home">
      <h1>Productos</h1>
      {/* <EjemploNavigate/> */}

      <div className="productos-container">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img
              src={producto.thumbnail}
              alt={producto.title}
            />

            <div className="producto-info">
              <h2>{producto.title}</h2>

              <p className="categoria">
                {producto.category}
              </p>

              <p className="descripcion">
                {producto.description}
              </p>

              <div className="producto-footer">
                <span className="precio">
                  ${producto.price}
                </span>

                <span className="rating">
                  ⭐ {producto.rating}
                </span>
              </div>

              <button onClick={()=>navigate(`/info-producto/${producto.id}`)} > Ver producto</button>
               <button className='btn btn-primary' onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;