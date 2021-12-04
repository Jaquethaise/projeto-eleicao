import './MenuBotoes.css';

export default function MenuBotoes() {
  return (
    <div className = "menuBotoes">

      <a href="/candidato" type="button" id="btnCandidato" className="btn btn-secondary">Candidatos</a>
      <a href="/voto" type="button" id="btnVoto" className="btn btn-success">Votos</a>

      <a href="/candidato/novo" type="button" id="btnCandidato" className="btn btn-secondary">Novo Candidato</a>
      <a href="/voto/novo" type="button" id="btnVoto" className="btn btn-success">Novo Voto</a>
      
    </div>
  );
}

