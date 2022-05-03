main()
async function main() {
  console.log("Hello World")

  //Token selected?
    let getToken = canvas.tokens.controlled
  console.log("Token: ", getToken)
      if(getToken.length == 0 || getToken.length > 1)
        {ui.notifications.error("Token não esta selecionado.")
      return;
    }

    //Actor to console
      let getActor = canvas.tokens.controlled[0].actor
  //Token have the Item?
  console.log("Ator: ", getActor)
    let getItem = getActor.items.find(item => item.data.name=="Flechas")
      if(getItem.data.data.qtd< 1)
        {ui.notifications.error("Sem flechas restantes")
      return;
    } 
      //Subtract the Item
        else {await getItem.update({"data.qtd": getItem.data.data.qtd-1})}
}