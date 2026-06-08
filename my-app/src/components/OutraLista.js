function OutraLista({itens}){

    // function zeroItens(){
    //     if(itens.length <= 0){
    //         return <p>Não há itens na lista</p>
    //     }
    // }

    return(
        <div>
            <h3>Lista de coisas boas: </h3>
            {itens.length > 0 ? (itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Não há itens na lista</p>
            )}


            {/* {zeroItens()} */}
        </div>
    )
}

export default OutraLista