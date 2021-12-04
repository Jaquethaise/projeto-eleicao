import React from "react"
import './Candidato.css';
import { useEffect, useState } from 'react';

function CandidatoEdit() {

    const [codigo, setCodigo] = useState()
    const [canditado, setCandidato] = useState()
    const [partido, setPartido] = useState()
    const [sigla, setSigla] = useState()
    const [ano, setAno] = useState()
    const [cargo, setCargo] = useState()
    //  console.log("Executando fetch..")
  
    useEffect(() => {
        fetch('http://localhost:3003/candidato/consultar/' + window.location.href.split('/').pop())
        //    .then(response => dados = response.json())    
        .then(response => response.json())
        //    .then(resposta => console.log(resposta))
        //    .then(newdados => dados.push(newdados));
        .then(responseData => {
          setCodigo(responseData[0].can_codigo)
          setCandidato(responseData[0].can_candidato)
          setPartido(responseData[0].can_partido)
          setSigla(responseData[0].can_sigla)
          setAno(responseData[0].can_fundacao)
          setCargo(responseData[0].can_cargo)
        });
    }, []
  
    )
  
    return (
      <form className="formCandidato" action="http://localhost:3003/candidato/edit" method="POST">
        <input style={{"visibility": "hidden"}} name="can_codigo" id="can_codigo" value={codigo} />
        <div className="form-group">
          <label htmlFor="can_candidato">Nome do Candidato</label>
          <input 
            type="text" 
            name="can_candidato" 
            className="form-control" 
            id="can_candidato" 
            value={canditado}
            onChange={e => setCandidato(e.target.value)}
            placeholder="Inserir nome do candidato" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="can_partido">Partido</label>
          <input 
            type="text" 
            name="can_partido" 
            className="form-control" 
            id="can_partido"
            value={partido}
            onChange={e => setPartido(e.target.value)}
            placeholder="Inserir nome do partido" />
        </div>
        <div className="form-group">
          <label htmlFor="can_sigla">Sigla do Partido</label>
          <input 
            type="text" 
            name="can_sigla" 
            className="form-control" 
            id="can_sigla" 
            value={sigla}
            onChange={e => setSigla(e.target.value)}
            placeholder="Inserir sigla do partido" />
        </div>
        <div className="form-group">
          <label htmlFor="can_fundacao">Ano de Fundação</label>
          <input 
            type="number" 
            name="can_fundacao" 
            className="form-control" 
            id="can_fundacao" 
            value={ano}
            onChange={e => setAno(e.target.value)}
            placeholder="Inserir ano da fundação" />
        </div>
        <div className="form-group">
          <label htmlFor="can_cargo">Cargo do Candidato</label>
          <input type="text" 
            name="can_cargo" 
            className="form-control" 
            id="can_cargo" 
            value={cargo}
            onChange={e => setCargo(e.target.value)}
            placeholder="Inserir cargo do candidato" />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    );
  }

  export default CandidatoEdit;