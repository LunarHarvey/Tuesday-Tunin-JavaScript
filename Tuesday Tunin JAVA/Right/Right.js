/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Right extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Right", "./Right/costumes/Right.svg", {
        x: -55.17817479029145,
        y: -161.09980675248568
      })
    ];

    this.sounds = [new Sound("Right", "./Right/sounds/Right.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      )
    ];
  }

  *whenKeyDPressed() {
    yield* this.playSoundUntilDone("Right");
  }

  *whenbackdropswitchesto() {
    this.visible = true;
    yield* this.wait(10);
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(5);
    this.createClone();
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(2);
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(6);
    this.createClone();
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(3);
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(4);
    this.createClone();
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(4);
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(8);
    this.createClone();
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    this.goto(20, 5);
  }

  *whenKeyRightArrowPressed() {
    yield* this.playSoundUntilDone("Right");
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
    yield* this.wait(4);
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(2);
    this.createClone();
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(4);
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(2);
    this.createClone();
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(5);
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(2);
    this.createClone();
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(4);
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    yield* this.wait(5);
    this.createClone();
    this.goto(20, 5);
    this.visible = true;
    yield* this.glide(1, 23, 263);
    this.visible = false;
    this.goto(20, 5);
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
}
