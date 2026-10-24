import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const InfoProduct = () => {
  const [producto, setProducto] = useState({});

  //El hook useParams nos permite traer el id capturado del elemento que le dimos click. Ese id lo agregamos a la url para traer solo la información del elemento que le dimos click
  const { id } = useParams();

  const getProductos = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProducto(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);
  return (
    <div className="card-infoProducto" key={producto.id}>
      <img src={producto.thumbnail} alt={producto.title} />

      <div className="producto-info">
        <h2>{producto.title}</h2>

        <p className="categoria">{producto.category}</p>

        <p className="descripcion">{producto.description}</p>

        <div className="producto-footer">
          <span className="precio">${producto.price}</span>

          <span className="rating">⭐ {producto.rating}</span>
        </div>
      </div>
    </div>
  );
};
