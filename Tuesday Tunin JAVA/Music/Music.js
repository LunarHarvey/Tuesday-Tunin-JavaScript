/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Music extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Music/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("OneStepAtATime", "./Music/sounds/OneStepAtATime.mp3"),
      new Sound("Froze_Inst", "./Music/sounds/Froze_Inst.wav"),
      new Sound("DropShot_Inst", "./Music/sounds/DropShot_Inst.mp3")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "MenuSongEND" },
        this.whenIReceiveMenusongend
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Week2MenuSongEnd" },
        this.whenIReceiveWeek2menusongend
      )
    ];
  }

  *whenbackdropswitchesto() {
    yield* this.playSoundUntilDone("DropShot_Inst");
  }

  *whenbackdropswitchesto2() {
    yield* this.startSound("OneStepAtATime");
  }

  *whenIReceiveMenusongend() {
    this.stopAllSounds();
    yield* this.playSoundUntilDone("Froze_Inst");
  }

  *whenIReceiveWeek2menusongend() {
    this.stopAllSounds();
    yield* this.playSoundUntilDone("DropShot_Inst");
  }
}
