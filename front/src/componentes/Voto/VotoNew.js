import React from "react"
import './Voto.css';
import { useEffect, useState } from 'react';

function VotoNew() {

    const [candidatos, setCandidatos] = useState([])
    //  console.log("Executando fetch..")
  
    useEffect(() => {
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
      <form className="formVoto" action="http://localhost:3003/voto/new" method="POST">
        <div class="form-group">
          <label for="vot_eleitor">Nome do Eleitor</label>
          <input type="text" name="vot_eleitor" class="form-control" id="vot_eleitor" placeholder="Inserir nome do eleitor" />
        </div>
        <div class="form-group">
          <label for="vot_nrotitulo">Número do Título</label>
          <input type="number" name="vot_nrotitulo" class="form-control" id="vot_nrotitulo" placeholder="Inserir número do título" />
        </div>
        <div class="form-group">
          <label for="vot_nrourna">Número da Urna</label>
          <input type="number" name="vot_nrourna" class="form-control" id="vot_nrourna" placeholder="Inserir número da urna" />
        </div>
        <div class="form-group">
          <label for="vot_zonaeleitoral">Zona Eleitoral</label>
          <input type="number" name="vot_zonaeleitoral" class="form-control" id="vot_zonaeleitoral" placeholder="Inserir número da zona eleitoral" />
        </div>
        <div class="form-group">
          <label for="can_codigo">Candidato</label>
          <select name="can_codigo" id="can_codigo" class="form-select form-select-sm" aria-label=".form-select-sm example">
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