// credit to this repo/user: https://github.com/Sky-Captain-13/foundry/blob/master/scriptMacros/tokenVision.js
let applyChanges = false;
new Dialog({
  title: `Escolha a:`,
  content: `
    <form>
      <div class="form-group">
        <label>Visão: Type:</label>
        <select id="vision-type" name="vision-type">
          <option value="nochange">Sem mudança</option>
          <option value="none">Nenhuma</option>
          <option value="dim0">Própria</option>
          <option value="dim30">Visão no escuro (6q)</option>
          <option value="dim60">Visão no escuro (9q)</option>
        </select>
      </div>
      <div class="form-group">
        <label>Fonte de Luz:</label>
        <select id="light-source" name="light-source">
          <option value="nochange">Sem mudança</option>
          <option value="none">Nenhuma</option>
          <option value="candle">Vela</option>
          <option value="lamp">Lâmpada</option>
          <option value="bullseye">Lanterna (Frontal)</option>
          <option value="hooded-dim">Lamparina (Fraca)</option>
          <option value="hooded-bright">Lamparina (Forte)</option>
          <option value="light">Magia de Luz (Cantrip)</option>
          <option value="torch">Tocha</option>
        </select>
      </div>
    </form>
    `,
  buttons: {
    yes: {
      icon: "<i class='fas fa-check'></i>",
      label: `Aplicar`,
      callback: () => applyChanges = true
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cencelar`
    },
  },
  default: "yes",
  close: html => {
    if (applyChanges) {
      for ( let token of canvas.tokens.controlled ) {
        let visionType = html.find('[name="vision-type"]')[0].value || "none";
        let lightSource = html.find('[name="light-source"]')[0].value || "none";
        let dimSight = 0;
        let brightSight = 0;
        let dimLight = 0;
        let brightLight = 0;
        let lightAngle = 360;
        let lockRotation = token.data.lockRotation;
        // Get Vision Type Values
        switch (visionType) {
          case "dim0":
            dimSight = 0;
            brightSight = 0;
            break;
          case "dim30":
            dimSight = 6;
            brightSight = 0;
            break;
          case "dim60":
            dimSight = 9;
            brightSight = 0;
            break;
          case "nochange":
          default:
            dimSight = token.data.dimSight;
            brightSight = token.data.brightSight;
        }
        // Get Light Source Values
        switch (lightSource) {
          case "none":
            dimLight = 0;
            brightLight = 0;
            break;
          case "candle":
            dimLight = 4;
            brightLight = 2;
            break;
          case "lamp":
            dimLight = 9;
            brightLight = 4.5;
            break;
          case "bullseye":
            dimLight = 9;
            brightLight = 4.5;
            lockRotation = false;
            lightAngle = 52.5;
            break;
          case "hooded-dim":
            dimLight = 6;
            brightLight = 0;
            break;
          case "hooded-bright":
            dimLight = 6;
            brightLight = 3;
            break;
          case "light":
            dimLight = 12;
            brightLight = 12;
            break;
          case "torch":
            dimLight = 4;
            brightLight = 2;
            break;
          case "nochange":
          default:
            dimLight = token.data.dimLight;
            brightLight = token.data.brightLight;
            lightAngle = token.data.lightAngle;
            lockRotation = token.data.lockRotation;
        }
        // Update Token
        console.log(token);
        token.document.update({light:{bright: brightLight, dim: dimLight, angle: lightAngle}});
      }
    }
  }
}).render(true);