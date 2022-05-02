/*
 * Examples for using roll tables
 * Examples assume existence of a basic roll table
 * called "Críticos" that contains text entries
 */

// Roll table and output to chat
game.tables.getName('Críticos').draw();

// Roll table and store result for later use
let roll = game.tables.getName('Críticos').roll();

// Roll table and send custom chat with result
let draw = game.tables.getName('Críticos').roll();
let month = draw.results[0].text;
ChatMessage.create({ content: `The month is: ${month}`});