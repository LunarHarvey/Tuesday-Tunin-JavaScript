/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fireworkfrolic extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Fireworkfrolic/costumes/costume1.svg", {
        x: 232.25991684191007,
        y: -90.84931891776682
      })
    ];

    this.sounds = [new Sound("pop", "./Fireworkfrolic/sounds/pop.wav")];

    this.triggers = [];
  }
}
