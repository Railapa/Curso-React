import './App.css';

function App() {
  const name = 'Matheus'
  const nameUpper = name.toUpperCase()

  const soma = (a,b) => {
    return a + b
  }

  const url = 'https://via.placeholder.com/150' // Não está funcionando o url da aula

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {nameUpper}</p>
      <p>Soma: {soma(1,2)}</p>
      <img scr={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
