import './App.css';
//import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = 'Maria'

  return (
    <div className='App'>

      <SayMyName nome='Matheus'></SayMyName>
      <SayMyName nome={nome}></SayMyName>

      <Pessoa nome='Bruno' idade='32' profissao='Programador' foto='https://via.placeholder/150'></Pessoa>
    </div>
  )
}

export default App;
