/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mrpenguin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Idle1", "./Mrpenguin/costumes/Idle1.svg", {
        x: 204.50016671219993,
        y: -52.49893861860002
      }),
      new Costume("Idle2", "./Mrpenguin/costumes/Idle2.svg", {
        x: 207.0658594738,
        y: -48.598412269599976
      }),
      new Costume("Up", "./Mrpenguin/costumes/Up.svg", {
        x: 207.4308949029,
        y: -47.49948528679994
      }),
      new Costume("Down", "./Mrpenguin/costumes/Down.svg", {
        x: 209.795807533,
        y: -44.05659499700002
      }),
      new Costume("Right", "./Mrpenguin/costumes/Right.svg", {
        x: 210.4907918249,
        y: -51.39580641650002
      }),
      new Costume("Left", "./Mrpenguin/costumes/Left.svg", {
        x: 207.0361675,
        y: -48.391520000000014
      }),
      new Costume("Full Sheet", "./Mrpenguin/costumes/Full Sheet.png", {
        x: 407,
        y: 67
      })
    ];

    this.sounds = [new Sound("pop", "./Mrpenguin/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "week1" }, this.whenIReceiveWeek1),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Week1End" },
        this.whenIReceiveWeek1end
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed)
    ];
  }

  *whenIReceiveWeek1() {
    this.visible = true;
  }

  *whenbackdropswitchesto() {
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
