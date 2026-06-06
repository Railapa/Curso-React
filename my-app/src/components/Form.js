import { useState } from "react";
import style from './Form.module.css'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(nome)
        console.log(email)
        console.log(senha)
    }

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [email, setEmail] = useState()

    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={cadastrarUsuario} className={style.formulario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form