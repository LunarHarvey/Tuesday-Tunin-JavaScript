/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Adventurer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Idle1", "./Adventurer/costumes/Idle1.png", {
        x: -29,
        y: -44
      }),
      new Costume("Idle2", "./Adventurer/costumes/Idle2.svg", {
        x: -16.50154250259999,
        y: -23.739904830200032
      }),
      new Costume("Up", "./Adventurer/costumes/Up.svg", {
        x: -18.001891245700108,
        y: -27.9454069862
      }),
      new Costume("Right", "./Adventurer/costumes/Right.svg", {
        x: -20.999920331800013,
        y: -30.845151993199977
      }),
      new Costume("Left", "./Adventurer/costumes/Left.svg", {
        x: -5.999881745000067,
        y: -32.26472701350002
      }),
      new Costume("Full Sheet", "./Adventurer/costumes/Full Sheet.png", {
        x: 464,
        y: 243
      })
    ];

    this.sounds = [new Sound("pop", "./Adventurer/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Week1End" },
        this.whenIReceiveWeek1end
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed)
    ];
  }

  *whenKeyUpArrowPressed() {
    this.costume = "Up";
  }

  *whenKeyRightArrowPressed() {
    this.costume = "Right";
  }

  *whenKeyLeftArrowPressed() {
    this.costume = "Left";
  }

  *whenKeyAPressed() {
    this.costume = "Left";
  }

  *whenKeyWPressed() {
    this.costume = "Up";
  }

  *whenKeyDPressed() {
    this.costume = "Right";
  }

  *whenbackdropswitchesto() {
    this.visible = true;
    for (let i = 0; i < 2e22; i++) {
      yield* this.wait(0.5);
      this.costume = "Idle1";
      yield* this.wait(0.5);
      this.costume = "Idle2";
      yield* this.wait(0.5);
      this.costume = "Idle1";
      yield;
    }
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
    for (let i = 0; i < 2e22; i++) {
      yield* this.wait(0.5);
      this.costume = "Idle1";
      yield* this.wait(0.5);
      this.costume = "Idle2";
      yield* this.wait(0.5);
      this.costume = "Idle1";
      yield;
    }
  }

  *whenIReceiveWeek1end() {
    this.visible = false;
  }

  *whenKey0Pressed() {
    this.visible = false;
  }
}
