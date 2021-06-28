/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Left extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Left", "./Left/costumes/Left.svg", {
        x: 25.576559999999944,
        y: 20.254079999999988
      })
    ];

    this.sounds = [new Sound("Left", "./Left/sounds/Left.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      )
    ];
  }

  *whenKeyAPressed() {
    yield* this.playSoundUntilDone("Left");
  }

  *whenbackdropswitchesto() {
    this.visible = true;
    yield* this.wait(5);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    yield* this.wait(19);
    this.goto(152, -182);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    yield* this.wait(12);
    this.goto(152, -182);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    yield* this.wait(8);
    this.goto(152, -182);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    this.goto(152, -182);
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
    yield* this.wait(2);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    yield* this.wait(19);
    this.goto(152, -182);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    yield* this.wait(20);
    this.goto(152, -182);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    yield* this.wait(21);
    this.goto(152, -182);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    this.goto(152, -182);
  }

  *whenbackdropswitchesto3() {
    this.visible = true;
    yield* this.wait(2);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    yield* this.wait(19);
    this.goto(152, -182);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    yield* this.wait(20);
    this.goto(152, -182);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    yield* this.wait(21);
    this.goto(152, -182);
    yield* this.glide(1, 156, 86);
    this.visible = false;
    this.goto(152, -182);
  }

  *whenKeyLeftArrowPressed() {
    yield* this.playSoundUntilDone("Left");
  }
}
