const myPlayerTag = "GQ2UJRJR";

export interface Player {
  club: PlayerClub;
  isQualifiedFromChampionshipChallenge: boolean;
  "3vs3Victories": number;
  icon: PlayerIcon;
  tag: string;
  name: string;
  trophies: number;
  expLevel: number;
  expPoints: number;
  highestTrophies: number;
  soloVictories: number;
  duoVictories: number;
  bestRoboRumbleTime: number;
  bestTimeAsBigBrawler: number;
  brawlers: BrawlerStatList;
  nameColor: string;
}

export interface PlayerIcon {
  id: number;
}

export interface PlayerClub {
  tag: string;
  name: string;
}

export interface BrawlerStatList extends Array<BrawlerStat> {}

export interface BrawlerStat {
  gadgets: AccessoryList;
  starPowers: StarPowerList;
  id: number;
  rank: number;
  trophies: number;
  highestTrophies: number;
  power: number;
  gears: number; // change TODO
  name: string;
}

export interface AccessoryList extends Array<Accessory> {}

export interface Accessory {
  id: number;
  name: string;
}

export interface StarPowerList extends Array<StarPower> {}

export interface StarPower {
  id: number;
  name: string;
}

export interface GearStatList extends Array<GearStat> {}

export interface GearStat {
  id: number;
  name: string;
  level: number;
}

export interface CardProps {
  name: string;
  power: number;
}

export const gadgets = [
  "SPEED",
  "HEALTH",
  "VISION",
  "SHIELD",
  "DAMAGE",
  "GADGET CHARGE",
];
