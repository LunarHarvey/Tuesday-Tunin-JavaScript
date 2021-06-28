/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Scratch extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Scratch/costumes/costume1.svg", {
        x: 266.49111449900636,
        y: -63.13574922659464
      })
    ];

    this.sounds = [new Sound("pop", "./Scratch/sounds/pop.wav")];

    this.triggers = [];
  }
}
