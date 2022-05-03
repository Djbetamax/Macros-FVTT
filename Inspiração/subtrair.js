main ()

async function main() {
    console.log("Hello World")

    //Token selecionado?
        let getToken = canvas.tokens.controlled
    console.log("Token: ", getToken)
            if(getToken.length==0 || getToken.length>1)
        {ui.notifications.error("Token não está selecionado.")
            return
    }
        //Ator pro console
            let getActor = canvas.tokens.controlled[0].actor
    //Token com inspiração?
    console.log("Ator: ", getActor)
        let item = getActor.items.find(item => item.data.name=="Inspiração")
            if(item==null || item==undefined)
        {ui.notifications.error("Sem Inspirações restantes!")
            return
    }
    //Subtrai ou Deleta o item
        await item.update({"data.qtd": item.data.data.qtd-1})
            if(item.data.data.qtd<=0 || item.data.data.qtd<1){
                item.delete()
    }
    //Manda a mensagem no chat
            let getActorName = canvas.tokens.controlled[0].actor.name
            let getLeftItem = item.data.data.qtd
        let chatContent = `<h2>Usa Inspiração</h2>` + `<h3>${getActorName} está usando uma @Item[Inspiração].<h3> Resta(m): ${getLeftItem} inspirações. [[/r 1d6]]`
          ChatMessage.create ({
            speaker: {alias: getActorName},
              content: chatContent 
    }) 
}