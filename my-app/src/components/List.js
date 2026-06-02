import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985}></Item>
                <Item marca='Fiat' ano_lancamento={1964}></Item>
                <Item marca='renault'></Item>
                <Item></Item>
            </ul>
        </>
    )
}

export default List