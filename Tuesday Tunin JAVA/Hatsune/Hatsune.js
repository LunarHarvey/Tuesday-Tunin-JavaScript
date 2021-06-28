/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hatsune extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Hatsune/costumes/costume1.svg", {
        x: 260.0316706232366,
        y: -131.42595296944825
      })
    ];

    this.sounds = [new Sound("pop", "./Hatsune/sounds/pop.wav")];

    this.triggers = [];
  }
}
