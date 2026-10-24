import { useParams } from "react-router-dom";

export default function Personajes() {

    const { id } = useParams()

  return (
    <div className="mt-5">
      <h1>Componente de personajes</h1>
      <h2>{id}</h2>
    </div>
  );
}
