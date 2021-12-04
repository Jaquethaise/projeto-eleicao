import React from "react"
import './Candidato.css';
import { useEffect, useState } from 'react';

function CandidatoNew() {

  
    //  console.log("Executando fetch..")
  
    useEffect(() => {
      
    }, []
  
    )
  
    return (
      <form className="formCandidato" action="http://localhost:3003/candidato/new" method="POST">
        <div class="form-group">
          <label for="can_candidato">Nome do Candidato</label>
          <input type="text" name="can_candidato" class="form-control" id="can_candidato" placeholder="Inserir nome do candidato" />
        </div>
        <div class="form-group">
          <label for="can_partido">Partido</label>
          <input type="text" name="can_partido" class="form-control" id="can_partido" placeholder="Inserir nome do partido" />
        </div>
        <div class="form-group">
          <label for="can_sigla">Sigla do Partido</label>
          <input type="text" name="can_sigla" class="form-control" id="can_sigla" placeholder="Inserir sigla do partido" />
        </div>
        <div class="form-group">
          <label for="can_fundacao">Ano de Fundação</label>
          <input type="number" name="can_fundacao" class="form-control" id="can_fundacao" placeholder="Inserir ano da fundação" />
        </div>
        <div class="form-group">
          <label for="can_cargo">Cargo do Candidato</label>
          <input type="text" name="can_cargo" class="form-control" id="can_cargo" placeholder="Inserir cargo do candidato" />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    );
  }

  export default CandidatoNew;