
import './App.css';
import {usestate} from "react";

function App() {

  const[vetor, SetVetor] = usestate(["rian", "marcos", "larissa"]);
  
  const[aluno, setaluno] = usestate("");
  
  function adicionar()
  {
   setvetor([...vetor, aluno]);
   setaluno("");
  }
  
  return (
    <div>
      <h1>aula 04 - estudo de vetores</h1>

      <div classname='conteudo'>
        <h3>entrada de dados </h3>
        <form>
        <p>
          digite o nome do aluno <br />
          <input type="text" value={aluno} onchange={ (e) => setaluno(e.target.value)}></input>
        </p>


        <p>
        
      <buton type='button' onclick={adicionar}>adicionar o nome na lista</buton>
        </p>
        </form>
        </div>

        <div clasname='conteudo'>
      <h3>alunos</h3>
</div>

  <ul>
    {vetor.map( nome =>(li>{nome})</li>))}
     </ul>
    </div>
  </div>
}; 
export default App;
