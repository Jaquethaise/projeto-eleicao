import React from "react"
import './Voto.css';
import { useEffect, useState } from 'react';

function VotoNew() {

    const [candidatos, setCandidatos] = useState([])
    const [codigo, setCodigo] = useState()
    const [eleitor, setEleitor] = useState()
    const [titulo, setTitulo] = useState()
    const [urna, setUrna] = useState()
    const [zona, setZona] = useState()
    //  console.log("Executando fetch..")
  
    useEffect(() => {
        fetch('http://localhost:3003/voto/consultar/' + window.location.href.split('/').pop())
        //    .then(response => dados = response.json())    
        .then(response => response.json())
        //    .then(resposta => console.log(resposta))
        //    .then(newdados => dados.push(newdados));
        .then(responseData => {
          setCodigo(responseData[0].vot_codigo)
          setEleitor(responseData[0].vot_eleitor)
          setTitulo(responseData[0].vot_nrotitulo)
          setUrna(responseData[0].vot_nrourna)
          setZona(responseData[0].vot_zonaeleitoral)
        });

        fetch('http://localhost:3003/candidato/listar')
        //    .then(response => dados = response.json())    
        .then(response => response.json())
        //    .then(resposta => console.log(resposta))
        //    .then(newdados => dados.push(newdados));
        .then(response => {
            setCandidatos(response)
        });
    }, []
  
    )
  
    return (
      <form className="formVoto" action="http://localhost:3003/voto/edit" method="POST">
          <input style={{"visibility": "hidden"}} name="vot_codigo" id="vot_codigo" value={codigo} />
        <div class="form-group">
          <label for="vot_eleitor">Nome do Eleitor</label>
          <input 
            type="text" 
            name="vot_eleitor" 
            className="form-control" 
            id="vot_eleitor" 
            value={eleitor}
            onChange={e => setEleitor(e.target.value)}
            placeholder="Inserir nome do eleitor" />
        </div>
        <div class="form-group">
          <label for="vot_nrotitulo">Número do Título</label>
          <input 
            type="number" 
            name="vot_nrotitulo" 
            className="form-control" 
            id="vot_nrotitulo" 
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            placeholder="Inserir número do título" />
        </div>
        <div class="form-group">
          <label for="vot_nrourna">Número da Urna</label>
          <input 
            type="number" 
            name="vot_nrourna" 
            className="form-control" 
            id="vot_nrourna" 
            value={urna}
            onChange={e => setUrna(e.target.value)}
            placeholder="Inserir número da urna" />
        </div>
        <div class="form-group">
          <label for="vot_zonaeleitoral">Zona Eleitoral</label>
          <input 
            type="number" 
            name="vot_zonaeleitoral" 
            className="form-control" 
            id="vot_zonaeleitoral" 
            value={zona}
            onChange={e => setZona(e.target.value)}
            placeholder="Inserir número da zona eleitoral" />
        </div>
        <div class="form-group">
          <label for="can_codigo">Candidato</label>
          <select name="can_codigo" id="can_codigo" className="form-select form-select-sm" aria-label=".form-select-sm example">
          <option selected>Open this select menu</option>
           
            {candidatos.map((item, index) =>
                <option value={item.can_codigo}>{item.can_candidato}</option>
              )
            }
          </select>
        </div>
        <br />
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    );
  }

  export default VotoNew;