let actor = canvas.tokens.controlled[0].actor
let messageContent = `<h2>Inspiração</h2> O mestre está dando @Item[Inspiração] para ` + `${actor}`

ChatMessage.create({content: messageContent})