/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Bar", "./Bar/costumes/Bar.svg", {
        x: 211.5,
        y: -151.52964020540009
      }),
      new Costume("Bar2", "./Bar/costumes/Bar2.svg", {
        x: 211.5,
        y: -151.5296406162003
      }),
      new Costume("HeatlthBarIcons", "./Bar/costumes/HeatlthBarIcons.png", {
        x: 459,
        y: 256
      })
    ];

    this.sounds = [new Sound("pop", "./Bar/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed)
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *whenbackdropswitchesto2() {
    this.visible = true;
    this.costume = "Bar2";
  }

  *whenbackdropswitchesto3() {
    this.visible = false;
  }

  *whenKey0Pressed() {
    this.visible = false;
  }
}
