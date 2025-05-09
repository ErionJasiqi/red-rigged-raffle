// __     __        _
// \ \   / /__ _ __| | ___  ___ _   _ _ __   __ _
//  \ \ / / _ \ '__| |/ _ \/ __| | | | '_ \ / _` |
//   \ V /  __/ |  | | (_) \__ \ |_| | | | | (_| |
//    \_/ \___|_|  |_|\___/|___/\__,_|_| |_|\__, |

import { RNGClass } from "./absneakender-hase.js";
import { Prize } from "./gewinnbarer-hase.js";

//
export class Verlosung {
  //  __________________________________
  // < Main-Methode des Main-Characters >
  //  ----------------------------------
  //    \         __------~~-,
  //     \      ,'            ,
  //           /               \
  //          /                :
  //         |                  '
  //         |                  |
  //         |                  |
  //          |   _--           |
  //          _| =-.     .-.   ||
  //          o|/o/       _.   |
  //          /  ~          \ |
  //        (____@)  ___~    |
  //           |_===~~~.`    |
  //        _______.--~     |
  //        \________       |
  //                 \      |
  //               __/-___-- -__
  //              /            _ \
  public main() {
    const redArmy = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@Ronaldo7",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
    ];
    const fiktivePreise = [
      new Prize("iPhone 16 Pro", 1),
      new Prize("Trip nach Dubi", 1),
      new Prize("Stepper nach Isti", 1),
      new Prize("10 kg Haribo", 2),
      new Prize("PlayStation 5 Slim", 3),
      new Prize("gebrauchte Sneaker", 5),
    ];
    const luckyMuckies = new RNGClass(
      redArmy,
      fiktivePreise,
    ).RNG();
    for (const [opfer, gewonnenerHase] of luckyMuckies.entries()) {
      console.log(`${opfer} gewinnt ${gewonnenerHase}`);
    }
  }
}

new Verlosung().main();
