main()

async function main(){
 console.log('Hello World')

 //Token está selecionado? Se não, dá erro.
 console.log('Tokens: ', canvas.tokens.controlled)
 if (canvas.tokens.controlled.length == 0 || canvas.tokens.controlled.length > 1){ui.notifications.error("Escolha um único token.")
 return
}

let actor = canvas.tokens.controlled[0].actor

 //O token tem inspiração? Se não, dá erro.
console.log ("Actor: ", actor)
let inspiracao= actor.items.find(item => item.data.name == 'Inspiração')
if(inspiracao == null || inspiracao == undefined) {
    ui.notifications.error('Sem inspiração restante.')
    return
}

 //Tem o limite máximo das inspirações? Se sim...
/*if (actor.data.items.value == actors.data.items.max){ui.notifications.error("Suas inspirações ja estão no limite máximo.")} */ 

//Subtraindo quantidade de inspiração
await inspiracao.update({"data.qtd": inspiracao.data.item.ativacao.qtd - 1})
if (inspiracao.data.item.ativacao.qtf <1){inspiracao.dele()}
}

//Adicionando quantidade de inspiração
