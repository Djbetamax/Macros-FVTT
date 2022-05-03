/*
* Takes all tokens and adds them to the combat tracker. Then rolls initative for all NPC tokens.
*/

async function main() {

    canvas.tokens.releaseAll();
        canvas.tokens.placeables.forEach(t => {
            if(t.actor.hasPlayerOwner) t.control({releaseOthers: false})
        });
    await canvas.tokens.toggleCombat();
        game.combat.rollNPC({ messageOptions: { rollMode: CONST.DICE_ROLL_MODES.PRIVATE }})

            game.macros.getName("Anunciar Rodada").execute();
        
}
    main();