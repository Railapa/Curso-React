import './App.css';
//import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = 'Maria'

  return (
    <div className='App'>

      <SayMyName nome='Matheus'></SayMyName>
      <SayMyName nome={nome}></SayMyName>

      <Pessoa nome='Bruno' idade='32' profissao='Programador' foto='https://via.placeholder/150'></Pessoa>

      <Frase></Frase>

      <List></List>
    </div>
  )
}

export default App;
