/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pooltable extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Pooltable/costumes/costume1.svg", {
        x: 266.49699875458566,
        y: -50.266567613264584
      })
    ];

    this.sounds = [new Sound("pop", "./Pooltable/sounds/pop.wav")];

    this.triggers = [];
  }
}
