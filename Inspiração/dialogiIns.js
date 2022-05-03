// credit to this repo/user: https://github.com/Sky-Captain-13/foundry/blob/master/scriptMacros/tokenVision.js
let applyChanges = false;
new Dialog({
  title: `Escolha quem receberá`,
  content: `
    <form>
      <div class="form-group">
        <label>Personagem: Type:</label>
        <select id="actor" name="light-source">
          <option value="ninguem">Ninguém</option>
          <option value="azazel">Azazel</option>
          <option value="blash">Blash</option>
          <option value="lotus">Lótus</option>
          <option value="oda">Oda Fujimaru</option>
          <option value="reinaldo">Reinaldo</option>
          <option value="todos">Todos</option>
        </select>
      </div>
    </form>
    `,
  buttons: {
    yes: {
      icon: "<i class='fas fa-check'></i>",
      label: `Dar Inspiração`,
      callback: () => applyChanges = true
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancelar`
    },
  },
  default: "yes",
  close: html => {
    if (applyChanges) {
      for ( let token of canvas.tokens.controlled ) {
        ///
          
        ///
        // Get Light Source Values
        switch (NAME) {
          case "todos":

            break;
          case "azazel":

            break;
          case "blash":

            break;
          case "lotus":

            break;
          case "oda":

            break;
          case "reinaldo":

            break;
          case "ninguem":
          default:

        }
        // Update Token
        console.log(token);
        token.document.update({light:{bright: brightLight, dim: dimLight, angle: lightAngle}});
      }
    }
  }
}).render(true);