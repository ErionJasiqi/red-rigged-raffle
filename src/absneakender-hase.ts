import { Prize } from "./gewinnbarer-hase";
//     _    _                          _                  _           _   _
//    / \  | |__  ___ _ __   ___  __ _| | _____ _ __   __| | ___ _ __| | | | __ _ ___  ___
//   / _ \ | '_ \/ __| '_ \ / _ \/ _` | |/ / _ \ '_ \ / _` |/ _ \ '__| |_| |/ _` / __|/ _ \
//  / ___ \| |_) \__ \ | | |  __/ (_| |   <  __/ | | | (_| |  __/ |  |  _  | (_| \__ \  __/
// /_/   \_\_.__/|___/_| |_|\___|\__,_|_|\_\___|_| |_|\__,_|\___|_|  |_| |_|\__,_|___/\___|
export class RNGClass {
  constructor(
    private Contenstant: string[],
    private prizes: Prize[],
  ) { }

  //  _____________________________
  // < Finger weg von meinem Code! >
  //  -----------------------------
  //       \                    / \  //\
  //        \    |\___/|      /   \//  \\
  //             /0  0  \__  /    //  | \ \
  //            /     /  \/_/    //   |  \  \
  //            @_^_@'/   \/_   //    |   \   \
  //            //_^_/     \/_ //     |    \    \
  //         ( //) |        \///      |     \     \
  //       ( / /) _|_ /   )  //       |      \     _\
  //     ( // /) '/,_ _ _/  ( ; -.    |    _ _\.-~        .-~~~^-.
  //   (( / / )) ,-{        _      `-.|.-~-.           .~         `.
  //  (( // / ))  '/\      /                 ~-. _ .-~      .-~^-.  \
  //  (( /// ))      `.   {            }                   /      \  \
  //   (( / ))     .----~-.\        \-'                 .~         \  `. \^-.
  //              ///.----..>        \             _ -~             `.  ^-`  ^-_
  //                ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
  //
  public RNG(): Map<string, string> {
    const richieMichies = new Map<string, string>();
    const mokieBrokies = new Array<string>();
    while (this.Contenstant.length > 0) {
      const zufälligerHase = Math.random();
      const rangierterHase = Math.floor(
        zufälligerHase * this.Contenstant.length,
      );
      const ausgesuchterHase = this.Contenstant[rangierterHase];
      mokieBrokies.push(ausgesuchterHase); // Ich push die Brokies auf die Mokies, yeah!
      this.Contenstant.pop();
    }
    while (this.prizes.length > 0 && mokieBrokies.length > 0) { // Fehler Hier, nacher Fixen
      const gewonnenerHase = this.prizes[0];
      const gewinnenderHase = mokieBrokies.shift();
      richieMichies.set(gewinnenderHase, gewonnenerHase.hase);
      if (gewonnenerHase.zahlenmässigerHase > 0) {
        this.prizes.shift();
      } else {
        this.prizes[0].zahlenmässigerHase--;
      }
    }
    return richieMichies;
  }
}
