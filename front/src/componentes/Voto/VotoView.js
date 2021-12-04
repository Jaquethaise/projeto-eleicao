import React from "react"
import './Voto.css';
import { useEffect, useState } from 'react';



function VotoView() {

  const [evento, setevento] = useState([])

  //  console.log("Executando fetch..")

  useEffect(() => {
    fetch('http://localhost:3003/voto/consultar/' + window.location.href.split('/').pop())
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
    <div id="idVoto" className="voto">
      <div id="corpo_rel">
        <legend> Registros de Votos Cadastrados</legend>
        <table id="tabela" className="table table-hover">
          <thead id="cabecalho_rel">
            <tr style={{textAlign:'left'}}>
              <th scope="col"> Código </th>
              <th scope="col"> Nome Eleitor </th>
              <th scope="col"> Titulo de Eleitor </th>
              <th scope="col"> Urna </th>
              <th scope="col"> Zona Eleitoral </th>
              <th scope="col"> Candidato </th>
            </tr>
          </thead>

          <tbody id="corpo_rel">
          {evento.map((item, i) =>
            <tr style={{textAlign:'left'}}>
                <th scope="row" style={{ textAlign: 'center' }}> {item.vot_codigo} </th>
                <td> {item.vot_eleitor} </td>
                <td> {item.vot_nrotitulo} </td>
                <td> {item.vot_nrourna} </td>
                <td> {item.vot_zonaeleitoral} </td>
                <td> {item.can_codigo} </td>

              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VotoView;
