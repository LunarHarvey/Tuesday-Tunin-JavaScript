/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Airport extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Airport/costumes/costume1.svg", {
        x: 98.06291190431716,
        y: 180.76262682101188
      })
    ];

    this.sounds = [new Sound("pop", "./Airport/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "week1" }, this.whenIReceiveWeek1),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenIReceiveWeek1() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("week2");
    this.stage.costume = "AirPlaneBG";
    this.visible = false;
  }

  *whenIReceiveMenu() {
    this.visible = true;
  }

  *whenthisspriteclicked2() {
    this.broadcast("Week2MenuSongEnd");
  }
}
