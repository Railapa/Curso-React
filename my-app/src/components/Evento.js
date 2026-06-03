import Button from "./Button"

function Evento(){

   function primeiroEvento(){
        console.log('Primeiro evento ativado')
   }

   function segundoEvento(){
    console.log('Segundo evento ativado')
   }

   return(
     <div>
          <Button event={primeiroEvento} text='Primeiro evento'></Button>
          <Button event={segundoEvento} text='Segundo evento'></Button>
     </div>
   )
}

export default Evento