import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Candidato from '../Candidato/Candidato';
import CandidatoView from '../Candidato/CandidatoView';
import CandidatoNew from '../Candidato/CandidatoNew';
import CandidatoEdit from '../Candidato/CandidatoEdit';
import Voto from '../Voto/Voto';
import VotoView from '../Voto/VotoView';
import VotoNew from '../Voto/VotoNew';
import VotoEdit from '../Voto/VotoEdit';


import './AreaDados.css';

export default function AreaDados(props) {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/candidato" component={Candidato}></Route>
        <Route exact path="/candidato/novo" component={CandidatoNew}></Route>
        <Route exact path="/candidato/consultar/:codigo" component={CandidatoView}></Route>
        <Route exact path="/candidato/editar/:codigo" component={CandidatoEdit}></Route>

        <Route exact path="/voto" component={Voto}></Route>
        <Route exact path="/voto/novo" component={VotoNew}></Route>
        <Route exact path="/voto/consultar/:codigo" component={VotoView}></Route>
        <Route exact path="/voto/editar/:codigo" component={VotoEdit}></Route>
      </Switch>

    </div>
  );
}

