/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fade extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Fade/costumes/costume1.svg", {
        x: 670.7160369695155,
        y: 271.2507851097459
      })
    ];

    this.sounds = [new Sound("pop", "./Fade/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Week2SecondSong" },
        this.whenIReceiveWeek2secondsong
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Week1End" },
        this.whenIReceiveWeek1end
      )
    ];
  }

  *whenIReceiveWeek2secondsong() {
    this.stage.costume = "Logo";
  }

  *whenIReceiveWeek1end() {
    this.stage.costume = "Logo";
  }
}
