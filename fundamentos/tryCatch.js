function tratarErroLancar(erro){
    //throw new Error('...')
    throw{ //pode lançar qualquer coisa, até obj
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!')
    } catch(e) {
        tratarErroLancar(e)
    } finally{
        console.log('Final') //Finally sempre vai passar
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)