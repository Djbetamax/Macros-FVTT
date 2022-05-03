main ()

async function main() {
  console.log("Hello World")

  //Token selected?
      let getToken = canvas.tokens.controlled
  console.log("Token: ", getToken)
          if(getToken.length == 0 || getToken.length > 1)
      {ui.notifications.error("Token isn't selected.")
          return;
  }

      //Actor to console
        let getActor = canvas.tokens.controlled[0].actor
  //Token have the Item?
  console.log("Ator: ", getActor)
      let item = getActor.items.find(item => item.data.name==" ITEMNAME ")
          if(item == null || item == undefined)
      {ui.notifications.error("Don't have the item.")
          return;
  }

  //Subtract the Item
    await item.update({"data.qtd": item.data.data.qtd-1})
    if(item.data.data.qtd<=0 || item.data.data.qtd<1){
        item.delete()
  }
  //Send a message to chat for an eventual roll
        let getActorName = canvas.tokens.controlled[0].actor.name
        let getLeftItem = item.data.data.qtd
      let chatContent = `<h3>${getActorName} ...... @Item[ ITEMNAME ]. Resta(m): ${getLeftItem} @Item[ ITEMNAME ]<h3> [[/r DICE]]`
        ChatMessage.create ({
          speaker: {alias: getActorName},
          content: chatContent 
  }) 
}