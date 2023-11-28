import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3000";

function Alunos() {
  const [aluno, setAlunos] = useState([]);
  const [nome, setNome] = useState("");

  const listarAlunos = () => {
    axios.get(`${API}/aluno/aluno-ordenadas`).then(
      ({ data }) => {
        setAlunos(data.message);
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
    listarAlunos();
  }, []);

  return (
    <>
      <h1>Lista de Alunos</h1>
      <div className="divListaAlunos">
        <div className="divPesquisa">
        <input
        className="inputPesquisa"
          type="text"
          onChange={onChangeNome}
          placeholder="Nome"
          value={nome}
        />
        </div>
        {aluno.map((aluno, indice) => {
          return (
            <div className="cardAlunos" key={indice}>
              <div className="informacao">
                <h6>{aluno.nome}</h6>
                <h6>{aluno.fase}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Alunos;