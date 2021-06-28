/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Up extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Up", "./Up/costumes/Up.svg", {
        x: 68.5974774319759,
        y: -172.7876026974144
      })
    ];

    this.sounds = [new Sound("recording1", "./Up/sounds/recording1.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      )
    ];
  }

  *whenKeyWPressed() {
    yield* this.playSoundUntilDone("recording1");
  }

  *whenbackdropswitchesto() {
    this.visible = true;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    yield* this.wait(15);
    this.goto(260, 18);
    this.visible = true;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    yield* this.wait(18);
    this.goto(260, 18);
    this.visible = true;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    yield* this.wait(15);
    this.goto(260, 18);
    this.visible = true;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    this.visible = true;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    yield* this.wait(8);
    this.goto(260, 18);
    this.visible = true;
    yield* this.wait(0.1);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    this.goto(260, 18);
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    yield* this.wait(15);
    this.goto(260, 18);
    this.visible = true;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    yield* this.wait(18);
    this.goto(260, 18);
    this.visible = true;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    yield* this.wait(15);
    this.goto(260, 18);
    this.visible = true;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    this.visible = true;
    yield* this.wait(7);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    yield* this.wait(8);
    this.goto(260, 18);
    this.visible = true;
    yield* this.wait(0.1);
    yield* this.glide(1, 261, 278);
    this.visible = false;
    this.goto(260, 18);
  }

  *whenKeyUpArrowPressed() {
    yield* this.playSoundUntilDone("recording1");
  }
}
