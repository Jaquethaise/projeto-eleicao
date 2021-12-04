import React from "react"
import './Voto.css';
import { useEffect, useState } from 'react';



function Voto() {

  const [evento, setevento] = useState([])

  //  console.log("Executando fetch..")

  useEffect(() => {
    fetch('http://localhost:3003/voto/listar')
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
        <legend> Registros de Candidatos Cadastrados</legend>
        <table id="tabela" className="table table-hover">
          <thead id="cabecalho_rel">
            <tr style={{textAlign:'left'}}>
              <th scope="col"> Código </th>
              <th scope="col"> Nome Eleitor </th>
              <th scope="col"> Titulo de Eleitor </th>
              <th scope="col"> Urna </th>
              <th scope="col"> Zona Eleitoral </th>
              <th scope="col"> Candidato </th>
              <th scope="col"><a href="/voto/novo" className="btn btn-success btn-block">Novo Voto</a>  </th>
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

                <td id="editar"> <a className="btn btn-primary btn-block" href={`/voto/editar/${item.vot_codigo}`}> Editar </a></td>
                <td id="editar"> <a className="btn btn-primary btn-block" href={`/voto/consultar/${item.vot_codigo}`}> Ver </a></td>
                <td id="editar"> 
                  <form action={`http://localhost:3003/voto/deletar/${item.vot_codigo}`} method="POST">
                    <input style={{"display": "none"}} name="vot_codigo" id="vot_codigo" value={item.vot_codigo} />
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

export default Voto;
