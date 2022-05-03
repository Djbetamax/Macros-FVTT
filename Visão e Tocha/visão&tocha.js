// A macro for the Foundry virtual tabletop that lets a user configure their token's vision and lighting settings. This script is taken from Sky's foundry repo here: https://github.com/Sky-Captain-13/foundry/blob/master/scriptMacros/tokenVision.js.

let applyChanges = false;
new Dialog({
  title: `Token Vision Configuration`,
  content: `
    <form>
      <div class="form-group">
        <label>Vision Type:</label>
        <select id="vision-type" name="vision-type">
          <option value="nochange">Sem mudança</option>
          <option value="self">Própria</option>
          <option value="dim9">Visão na penumbra (9m/6q)</option>
          <option value="dim30">Visão no escuro (30m/20q)</option>
          <option value="dimT">Visão nas trevas (perfeitamente)</option>
        </select>
      </div>
      <div class="form-group">
        <label>Light Source:</label>
        <select id="light-source" name="light-source">
          <option value="nochange">Sem mudança</option>
          <option value="none">Nenhuma</option>
          <option value="candle">Vela</option>
          <option value="torch">Tocha</option>
          <option value="hooded">Lâmparina</option>
          <option value="bullseye">Lanterna</option>
          <option value="lamp">Lâmpada</option>
          <option value="light">Magia de Luz</option>
        </select>
      </div>
    </form>
    `,
  buttons: {
    yes: {
      icon: "<i class='fas fa-check'></i>",
      label: `Apply Changes`,
      callback: () => applyChanges = true
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel Changes`
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
        let lightAnimation = token.data.lightAnimation;
        let lightAlpha = token.data.lightAlpha;
        let lightColor = token.data.lightColor;
        const colorFire = "#f8c377";
        const colorWhite = "#ffffff";

      // Get Vision Type Values
        switch (visionType) {
          case "self":
            dimSight = 1;
            brightSight = 0;
            break;
          case "dim9":
            dimSight = 6;
            brightSight = 3;
            break;
          case "dim30":
            dimSight = 20;
            brightSight = 10;
            break;
          case "dimT":
            dimSight = 40;
            brightSight = 20;
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
            lightAnimation = {type: "none"};
            break;
          case "candle":
            dimLight = 2;
            brightLight = 1;
            lightAnimation = {type: "torch", speed: 2, intensity: 1};
            lightColor = colorFire;
            lightAlpha = 0.15;
            break;
          case "torch":
              dimLight = 4;
              brightLight = 2;
              lightAnimation = {type: "torch", speed: 1, intensity: 1};
              lightColor = colorFire;
              lightAlpha = 0.15;
            break;
          case "hooded":
            dimLight = 6;
            brightLight = 3;
            lightAnimation = {type: "torch", speed: 1, intensity: 2};
            lightColor = colorFire;
            lightAlpha = 0.15;
            break;
          case "bullseye":
            dimLight = 9;
            brightLight = 4.5;
            lockRotation = false;
            lightAngle = 52.5;
            lightAnimation = {type: "none", speed: 0, intensity: 2};
            lightColor = colorFire;
            lightAlpha = 0.15;
            break;
          case "lamp":
            dimLight = 12;
            brightLight = 9;
            lightAnimation = {type: "none", speed: 0, intensity: 2};
            lightColor = colorFire;
            lightAlpha = 0.15;
            break;
          case "light":
            dimLight = 5;
            brightLight = 4;
            lightAnimation = {type: "none"};
            lightColor = colorWhite;
            lightAlpha = 0.15;
            break;
          case "nochange":
          default:
            dimLight = token.data.dimLight;
            brightLight = token.data.brightLight;
            lightAngle = token.data.lightAngle;
            lockRotation = token.data.lockRotation;
            lightAnimation = token.data.lightAnimation;
            lightAlpha = token.data.lightAlpha;
            lightColor = token.data.lightColor;
        }

      // Update Token
        console.log(token);
        token.document.update({
          "vision":true,
          "dimSight": dimSight, 
          "brightSight": brightSight,
          light:{ dim: dimLight, bright : brightLight, color : lightColor, alpha: lightAlpha, angle: lightAngle, animation: lightAnimation},
        });
      }
    }
  }
}).render(true);