//   ____               _             _                         _   _
//  / ___| _____      _(_)_ __  _ __ | |__   __ _ _ __ ___ _ __| | | | __ _ ___  ___
// | |  _ / _ \ \ /\ / / | '_ \| '_ \| '_ \ / _` | '__/ _ \ '__| |_| |/ _` / __|/ _ \
// | |_| |  __/\ V  V /| | | | | | | | |_) | (_| | | |  __/ |  |  _  | (_| \__ \  __/
//  \____|\___| \_/\_/ |_|_| |_|_| |_|_.__/ \__,_|_|  \___|_|  |_| |_|\__,_|___/\___|
export class Prize {
  //  _________________________
  // < Mich kann man gewinnen! >
  //  -------------------------
  //   \
  //    \   \
  //         \ /\
  //         ( )
  //       .( o ).
  //
  constructor(
    private derHase: string,
    private derZahlenmässigeHase: number,
  ) { }

  public get hase(): string {
    return this.derHase;
  }

  public get zahlenmässigerHase(): number {
    return this.derZahlenmässigeHase;
  }

  public set zahlenmässigerHase(neuerHase: number) {
    this.derZahlenmässigeHase = neuerHase;
  }
}
