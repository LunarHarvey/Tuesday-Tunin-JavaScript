/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DjAssets extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./DjAssets/costumes/costume1.svg", {
        x: 80.51068376068366,
        y: -12.389647091260201
      }),
      new Costume("costume2", "./DjAssets/costumes/costume2.svg", {
        x: 81.58843524600701,
        y: -1.893275198830679
      }),
      new Costume("costume3", "./DjAssets/costumes/costume3.svg", {
        x: 82.42092,
        y: -2.205145000000016
      }),
      new Costume("Dj_Assets", "./DjAssets/costumes/Dj_Assets.png", {
        x: 392.5,
        y: 121
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Week1End" },
        this.whenIReceiveWeek1end
      ),
      new Trigger(Trigger.BROADCAST, { name: "week2" }, this.whenIReceiveWeek2)
    ];
  }

  *whenbackdropswitchesto() {
    while (true) {
      yield* this.wait(0.5);
      this.costume = "costume2";
      yield* this.wait(0.5);
      this.costume = "costume1";
      yield* this.wait(0.5);
      this.costume = "costume3";
      yield;
    }
  }

  *whenKey0Pressed() {
    this.visible = false;
  }

  *whenIReceiveWeek1end() {
    this.stopAllSounds();
    this.visible = false;
  }

  *whenIReceiveWeek2() {
    this.visible = true;
    while (true) {
      yield* this.wait(0.5);
      this.costume = "costume2";
      yield* this.wait(0.5);
      this.costume = "costume1";
      yield* this.wait(0.5);
      this.costume = "costume3";
      yield;
    }
  }
}
