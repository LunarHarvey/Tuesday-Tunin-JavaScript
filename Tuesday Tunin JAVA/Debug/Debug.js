/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Debug extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Debug/costumes/costume1.svg", {
        x: 246.5,
        y: 151.470355
      })
    ];

    this.sounds = [new Sound("pop", "./Debug/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed)
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *whenKey0Pressed() {
    this.stage.costume = "Debug";
    this.stopAllSounds();
  }
}
