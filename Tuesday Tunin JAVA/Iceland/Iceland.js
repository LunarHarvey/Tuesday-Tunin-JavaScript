/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Iceland extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Iceland/costumes/costume1.svg", {
        x: 214.1605308643268,
        y: 152.82381364248255
      })
    ];

    this.sounds = [new Sound("pop", "./Iceland/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "week2" }, this.whenIReceiveWeek2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu)
    ];
  }

  *whenthisspriteclicked() {
    this.stage.costume = "IceBG";
    this.visible = false;
    this.broadcast("week1");
  }

  *whenIReceiveWeek2() {
    this.visible = false;
  }

  *whenthisspriteclicked2() {
    this.broadcast("MenuSongEND");
  }

  *whenIReceiveMenu() {
    this.visible = true;
  }
}
