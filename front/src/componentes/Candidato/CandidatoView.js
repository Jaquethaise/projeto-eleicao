import React from "react"
import './Candidato.css';
import { useEffect, useState } from 'react';



function CandidatoView() {

  const [evento, setevento] = useState([])

  //  console.log("Executando fetch..")

  useEffect(() => {
    fetch('http://localhost:3003/candidato/consultar/' + window.location.href.split('/').pop())
      //    .then(response => dados = response.json())    
      .then(response => response.json())
      //    .then(resposta => console.log(resposta))
      //    .then(newdados => dados.push(newdados));
      .then(response => {
        console.log(response)
        setevento(response)
      });
  }, []

  )

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

              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidatoView;
