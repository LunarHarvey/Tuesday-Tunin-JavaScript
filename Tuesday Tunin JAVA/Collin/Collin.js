/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Collin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Idle1", "./Collin/costumes/Idle1.svg", {
        x: 180.00000224999994,
        y: -26.500002400000028
      }),
      new Costume("Idle2", "./Collin/costumes/Idle2.svg", {
        x: 167.000155,
        y: -25.61178000000001
      }),
      new Costume("Collin_Assets", "./Collin/costumes/Collin_Assets.png", {
        x: 310,
        y: 109
      })
    ];

    this.sounds = [new Sound("pop", "./Collin/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Week2SecondSong" },
        this.whenIReceiveWeek2secondsong
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *whenIReceiveWeek2secondsong() {
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    for (let i = 0; i < 2e22; i++) {
      yield* this.wait(0.2);
      this.costume = "Idle1";
      yield* this.wait(0.2);
      this.costume = "Idle2";
      yield* this.wait(0.2);
      this.costume = "Idle1";
      yield;
    }
  }
}
