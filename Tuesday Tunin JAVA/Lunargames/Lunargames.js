/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lunargames extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("asd", "./Lunargames/costumes/asd.png", { x: 274, y: 274 })
    ];

    this.sounds = [
      new Sound(
        "HaxeFlixel intro.mp3",
        "./Lunargames/sounds/HaxeFlixel intro.mp3.wav"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "MenuStart" },
        this.whenIReceiveMenustart
      )
    ];
  }

  *whenIReceiveMenustart() {
    yield* this.startSound("HaxeFlixel intro.mp3");
    this.visible = true;
    this.effects.ghost = 100;
    for (let i = 0; i < 40; i++) {
      this.effects.ghost += -2.5;
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 40; i++) {
      this.effects.ghost += 2.5;
      yield;
    }
    this.effects.ghost = 0;
    this.visible = false;
    yield* this.wait(1);
  }
}
