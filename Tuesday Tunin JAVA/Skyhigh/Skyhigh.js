/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Skyhigh extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Skyhigh/costumes/costume1.svg", {
        x: 243.89175323162073,
        y: 132.40397656916656
      })
    ];

    this.sounds = [new Sound("pop", "./Skyhigh/sounds/pop.wav")];

    this.triggers = [];
  }
}
