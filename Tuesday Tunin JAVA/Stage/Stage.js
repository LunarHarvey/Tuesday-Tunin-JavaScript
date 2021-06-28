/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Debug", "./Stage/costumes/Debug.svg", {
        x: 880.1034346520763,
        y: 395.855482711683
      }),
      new Costume("BegginingMenu", "./Stage/costumes/BegginingMenu.svg", {
        x: 278.7933184349313,
        y: 230.84599946525094
      }),
      new Costume("Logo", "./Stage/costumes/Logo.png", { x: 480, y: 360 }),
      new Costume("IceBG", "./Stage/costumes/IceBG.png", { x: 480, y: 359 }),
      new Costume("AirPlaneBG", "./Stage/costumes/AirPlaneBG.png", {
        x: 480,
        y: 360
      }),
      new Costume("AirPlaneEvilBG", "./Stage/costumes/AirPlaneEvilBG.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars.myVariable = 0;
  }
}
