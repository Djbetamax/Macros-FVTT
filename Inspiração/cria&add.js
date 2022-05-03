main ()

  async function main() {
    console.log('Hello World')

  //Token selecionado?
    let getToken = canvas.tokens.controlled
  console.log("Token: ", getToken)
    if(getToken.length == 0 || getToken.length > 1)
      {ui.notifications.error("Selecione apenas um token.")
        return;
    }

    //Pega o ator do token e joga no console
      let getActor = canvas.tokens.controlled[0].actor
        console.log("Ator: ", getActor)

  //Cria a inspiração
      const cItem = game.items.getName("Inspiração");
      let item = getActor.items.find(item => item.data.name=="Inspiração")
        if (item==null || item==undefined) {
          await actor.createEmbeddedDocuments('Item', [cItem.toObject()])
    //Manda a mensagem no chat
        let getActorName = getActor.name
        let getLeftItem = cItem.data.data.qtd
        let chatContent = `<h2>Recebe Inspiração</h2>`+`<h3>O mestre está dando uma @Item[Inspiração] para ${getActorName}.</h3> Tem ${getLeftItem} de 3 inspirações máximas.`
          ChatMessage.create ({
            speaker: "Mestre",
              content: chatContent 
        })
      }
        
    //Adcionar inspiração
      await item.update({"data.qtd": item.data.data.qtd+1})
        if (item.data.data.qtd>3 || item.data.data.qtd==4)
          {await item.update({"data.qtd": item.data.data.qtd-1})
            ui.notifications.error("O máximo de inspirações já foi atingido.")
          return
      }

      //Mensagem no chat2
        let getActorName2 = getActor.name
        let getLeftItem2 = item.data.data.qtd
        let chatContent2 = `<h2>Recebe Inspiração</h2>`+ `<h3>O mestre está dando uma @Item[Inspiração] para ${getActorName2}.</h3> Tem ${getLeftItem2} de 3 inspirações máximas.`
          ChatMessage.create ({
            speaker: "Mestre",
              content: chatContent2
        }) 
}