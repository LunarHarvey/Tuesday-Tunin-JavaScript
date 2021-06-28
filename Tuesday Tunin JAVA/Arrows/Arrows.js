/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arrows extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Arrows", "./Arrows/costumes/Arrows.svg", {
        x: -39.93597999999997,
        y: 76.65498971480008
      }),
      new Costume("UpGlow", "./Arrows/costumes/UpGlow.svg", {
        x: -39.93597999999997,
        y: 78.87739357300002
      }),
      new Costume("RightGlow", "./Arrows/costumes/RightGlow.svg", {
        x: -45.55810076285468,
        y: 76.82166852240002
      }),
      new Costume("LeftGlow", "./Arrows/costumes/LeftGlow.svg", {
        x: -39.937202174070364,
        y: 76.655
      }),
      new Costume("NOTE_assets", "./Arrows/costumes/NOTE_assets.png", {
        x: 469,
        y: 231
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
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
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(Trigger.BROADCAST, { name: "week1" }, this.whenIReceiveWeek1),
      new Trigger(Trigger.BROADCAST, { name: "week2" }, this.whenIReceiveWeek2),
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed)
    ];
  }

  *whenKeyDownArrowPressed() {
    this.costume = "DownGlow";
    yield* this.wait(0.5);
    this.costume = "Arrows";
  }

  *whenKeyUpArrowPressed() {
    this.costume = "UpGlow";
    yield* this.wait(0.5);
    this.costume = "Arrows";
  }

  *whenKeyRightArrowPressed() {
    this.costume = "RightGlow";
    yield* this.wait(0.5);
    this.costume = "Arrows";
  }

  *whenKeyLeftArrowPressed() {
    this.costume = "LeftGlow";
    yield* this.wait(0.5);
    this.costume = "Arrows";
  }

  *whenKeySPressed() {
    this.costume = "DownGlow";
    yield* this.wait(0.5);
    this.costume = "Arrows";
  }

  *whenKeyWPressed() {
    this.costume = "UpGlow";
    yield* this.wait(0.5);
    this.costume = "Arrows";
  }

  *whenKeyAPressed() {
    this.costume = "LeftGlow";
    yield* this.wait(0.5);
    this.costume = "Arrows";
  }

  *whenKeyDPressed() {
    this.costume = "RightGlow";
    yield* this.wait(0.5);
    this.costume = "Arrows";
  }

  *whenIReceiveWeek1() {
    this.visible = true;
  }

  *whenIReceiveWeek2() {
    this.visible = true;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenKey0Pressed() {
    this.visible = false;
  }
}
