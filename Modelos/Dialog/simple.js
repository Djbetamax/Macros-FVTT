/////
//Sua interface é em blocos de botão - Sem organização
/////

//Aqui deve vir o que acontecerá com o token
  function tokenUpdate(data) {
    canvas.tokens.controlled.map(token => token.document.update({light: data}));
  } 

//O padrão para alguma coisa
  let torchAnimation = {"type": "torch", "speed": 0.35, "intensity": 0.35, "reverse": false}; 

let dialogEditor = new Dialog({ 
  title: `H1`,
  content: `H3`,
  buttons: { //Botões
    none: {
      label: `Nenhuma`,
      callback: () => {
        tokenUpdate({"dim": 0, "bright": 0, "angle": 360, "luminosity": 0.5});
        dialogEditor.render(true);
      }
    },
    torch: {
      label: `Tocha`,
      callback: () => {
        tokenUpdate({"dim": 4, "bright": 2, "angle": 360, "luminosity": 0.35, "animation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    light: {
      label: `Magia - Luz`,
      callback: () => {
        tokenUpdate({"dim": 12, "bright": 12, "angle": 360, "luminosity": 0.35, "animation": {"type": "none"}});
        dialogEditor.render(true);
      }
    },
    lamp: {
      label: `Lâmpada`,
      callback: () => {
        tokenUpdate({"dim": 9, "bright": 6, "angle": 360, "luminosity": 0.35, "animation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    bullseye: {
      label: `Lanterna Frontal`,
      callback: () => {
        tokenUpdate({"dim": 9, "bright": 4.5, "angle": 45, "luminosity": 0.35, "animation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    hoodedOpen: {
      label: `Lamparina (No auge)`,
      callback: () => {
        tokenUpdate({"dim": 6, "bright": 3, "angle": 360, "luminosity": 0.35, "animation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    hoodedClosed: {
      label: `Lamparina (Avariada)`,
      callback: () => {
        tokenUpdate({"dim": 6, "bright": 0, "angle": 360, "luminosity": 0.35, "animation": torchAnimation});
        dialogEditor.render(true);
      }
    },
    darkness: {
      label: `Magia - Escuridão`,
      callback: () => {
        tokenUpdate({"dim": 0, "bright": 9, "angle": 360, "luminosity": -0.35, "animation": {"type": "none"}});
        dialogEditor.render(true);
      }
    },
    close: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Fechar`
    },
  },
  default: "close",
  close: () => {}
});

dialogEditor.render(true)