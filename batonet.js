const prompt = require("prompt-sync")();
let numBatonet = 10;
const verif = (nbBatonet) => {
  if (!isNaN(nbBatonet)) {
    return nbBatonet === 1 || nbBatonet === 2 || nbBatonet === 3;
  }
  return false;
};
const rolePlay = (player) => {
  let nombreBatonet = parseInt(
    prompt(`le joueur ${player} choisit un nombre de batonet : `)
  );
  //console.log(typeof nombreBatonet);
  if (verif(nombreBatonet) && nombreBatonet <= numBatonet) {
    numBatonet -= nombreBatonet;
    console.log("le reste de batonet est :", numBatonet);

    if (numBatonet === 0) {
      console.log("le joueur ", player, " a gagné");
      return false;
    }
  } else true;
  return true;
};

const game = () => {
  let player = 1;
  while (numBatonet > 0) {
    if (!rolePlay(player)) {
      break;
    }

    player = player == 1 ? 2 : 1;
  }
};
game();
