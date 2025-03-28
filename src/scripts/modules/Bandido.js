import Entidade from "./Entidade.js"
import { d20, d6 } from "./dados.js"
export default class Bandido extends Entidade {
    constructor(nome, nivel, forca, destreza, resistencia) {
        super(nome, nivel, forca, destreza, resistencia);
    }

    ataqueUm(resis) {
        const tentativa = (d20() + this.destreza);
        if (tentativa > resis) {
            const dano = d6() + this.forca;
            return [dano, "O ladrão parte para cima e acerta uma coronhada em você com sua cimitarra"]
        }
        else {
            return [0, "O ladrão corre em sua direção mas erra miserávelmente seu golpe"]
        }
    }

    ataqueDois(resis) {
        const tentativa = (d20() + this.destreza) - 4;
        if (tentativa > resis) {
            const dano = d6(2) + this.forca
            return ([dano, "o ladrão te acerta com muita força com a lamina de sua espada"])
        }
    }
}

