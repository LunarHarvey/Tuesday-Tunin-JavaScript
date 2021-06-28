import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Adventurer from "./Adventurer/Adventurer.js";
import Mrpenguin from "./Mrpenguin/Mrpenguin.js";
import Arrows from "./Arrows/Arrows.js";
import Left from "./Left/Left.js";
import Right from "./Right/Right.js";
import Up from "./Up/Up.js";
import Bar from "./Bar/Bar.js";
import Collin from "./Collin/Collin.js";
import Iceland from "./Iceland/Iceland.js";
import Airport from "./Airport/Airport.js";
import Skyhigh from "./Skyhigh/Skyhigh.js";
import Pooltable from "./Pooltable/Pooltable.js";
import Fireworkfrolic from "./Fireworkfrolic/Fireworkfrolic.js";
import Scratch from "./Scratch/Scratch.js";
import Hatsune from "./Hatsune/Hatsune.js";
import Debug from "./Debug/Debug.js";
import DjAssets from "./DjAssets/DjAssets.js";
import Fade from "./Fade/Fade.js";
import Music from "./Music/Music.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Lunargames from "./Lunargames/Lunargames.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Adventurer: new Adventurer({
    x: 51.99999898274746,
    y: 20.000000678168362,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Mrpenguin: new Mrpenguin({
    x: 47.99999923706059,
    y: 25.00000025431312,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Arrows: new Arrows({
    x: 30,
    y: 29,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Left: new Left({
    x: 156.99999993642172,
    y: -168.99997838338396,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Right: new Right({
    x: 21.000000127156568,
    y: 16.000020938447676,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Up: new Up({
    x: 256.0000003178914,
    y: 25.00002144707392,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Bar: new Bar({
    x: 64.99999942779544,
    y: 24.999999915228926,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  Collin: new Collin({
    x: 34.00000012715657,
    y: 23.000000423855212,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Iceland: new Iceland({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Airport: new Airport({
    x: -83.27023887415628,
    y: -61.58830971704564,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Skyhigh: new Skyhigh({
    x: 60.31894283369801,
    y: -67.24884602373554,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Pooltable: new Pooltable({
    x: 42.52258131496731,
    y: 57.280635938715704,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Fireworkfrolic: new Fireworkfrolic({
    x: -4.497902227100203,
    y: 48.07859438170644,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Scratch: new Scratch({
    x: 83.84826904390432,
    y: -20.874611352588847,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Hatsune: new Hatsune({
    x: 67.02843258689848,
    y: 3.1419296137717545,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Debug: new Debug({
    x: -1,
    y: 10,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  DjAssets: new DjAssets({
    x: 0,
    y: 15,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Fade: new Fade({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Music: new Music({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  Sprite1: new Sprite1({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  Lunargames: new Lunargames({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
