import React from "react"
import './Candidato.css';
import { useEffect, useState } from 'react';



function Candidato() {

  const [evento, setevento] = useState([])

  //  console.log("Executando fetch..")

  useEffect(() => {
    fetch('http://localhost:3003/candidato/listar')
      //    .then(response => dados = response.json())    
      .then(response => response.json())
      //    .then(resposta => console.log(resposta))
      //    .then(newdados => dados.push(newdados));
      .then(response => {
        console.log(response)
        setevento(response)
      })
      .catch(() =>{
        window.location.replace('http://localhost:3000') 
      });
  }, []

  )

  const deletarCandidato = (id) => {
    fetch('http://localhost:3003/candidato/deletar/' + id)
      //    .then(response => dados = response.json())    
      .then(response => response.json())
      //    .then(resposta => console.log(resposta))
      //    .then(newdados => dados.push(newdados));
      .then(response => {
        window.location.replace('http://localhost:3000') 
      });
  }

  return (
    <div id="idCandidato" className="candidato">
      <div id="corpo_rel">
        <legend> Registros de Candidatos Cadastrados</legend>
        <table id="tabela" className="table table-hover">
          <thead id="cabecalho_rel">
            <tr style={{textAlign:'left'}}>
              <th scope="col"> Código </th>
              <th scope="col"> Nome Candidato </th>
              <th scope="col"> Partido </th>
              <th scope="col"> Sigla Partido </th>
              <th scope="col"> Data Fundação </th>
              <th scope="col"> Cargo </th>
              <th scope="col"><a href="/candidato/novo" className="btn btn-success btn-block">Novo Candidato</a>  </th>
            </tr>
          </thead>

          <tbody id="corpo_rel">
            {evento.map((item, i) =>
            <tr style={{textAlign:'left'}}>
                <th scope="row" style={{ textAlign: 'center' }}> {item.can_codigo} </th>
                <td> {item.can_candidato} </td>
                <td> {item.can_partido} </td>
                <td> {item.can_sigla} </td>
                <td> {item.can_fundacao} </td>
                <td> {item.can_cargo} </td>

                <td id="editar"> <a className="btn btn-primary btn-block" href={`/candidato/editar/${item.can_codigo}`}> Editar </a></td>
                <td id="editar"> <a className="btn btn-primary btn-block" href={`/candidato/consultar/${item.can_codigo}`}> Ver </a></td>
                <td id="editar"> 
                  <form action={`http://localhost:3003/candidato/deletar/${item.can_codigo}`} method="POST">
                    <input style={{"display": "none"}} name="can_codigo" id="can_codigo" value={item.can_codigo} />
                  <button className="btn btn-primary btn-block" type="submit"> Deletar </button>
                  </form>
                </td>

              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Candidato;
