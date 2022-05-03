/*
 * Examples for using roll tables
 * Examples assume existence of a basic roll table
 * called "TABLENAME" that contains text entries
 */

// Rola na tabela
game.tables.getName('TABLENAME').draw();

// Rola e salva para futuramente (possivelmente é a parte de redirecionar ao clicar)
let roll = game.tables.getName('TABLENAME').roll();

// Rola no chat e manda no chat
let draw = game.tables.getName('TABLENAME').roll();
let res = draw.results[0].text;
ChatMessage.create({ content: `The month is: ${res}`});