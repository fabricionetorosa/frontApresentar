import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3000";

function Materia() {
  const [ materia, setMateria] = useState([]);
  const [nome, setNome] = useState("");

  const listarMateria = () => {
    axios.get(`${API}/materia/materia-ordenadas`).then(
      ({ data }) => {
        setProfessores(data.message);
        console.log(data.message);
      },
      (err) => {
        alert("Erro!");
      }
    );
  };

  const onChangeNome = ({ target }) => {
    setNome(target.value);
  };

  useEffect(() => {
    listarProfessores();
  }, []);

  return (
    <>
      <h1>Lista de Professores</h1>
      <div className="divListarMateria">
        <div className="divPesquisa">
        <input
        className="inputPesquisa"
          type="text"
          onChange={onChangeNome}
          placeholder="Nome"
          value={nome}
        />
        </div>
        {professor.map((materia, indice) => {
          return (
            <div className="cardmateria" key={indice}>
              <div className="informacao">
                <h6>{materia.nome}</h6>
                
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Materia;