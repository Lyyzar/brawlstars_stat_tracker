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
  gears: GearStatList;
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

export const emptyBrawlerStat = {
  gadgets: [],
  starPowers: [],
  id: 0,
  rank: 0,
  trophies: -1,
  highestTrophies: 0,
  power: 0,
  gears: [],
  name: "",
};

export const gadgets = [
  "SPEED",
  "HEALTH",
  "VISION",
  "SHIELD",
  "DAMAGE",
  "GADGET CHARGE",
];

export interface SearchBarProps {
  brawlerStatList: BrawlerStatList;
}

export const brawlers = [
  "8-Bit",
  "Amber",
  "Angelo",
  "Ash",
  "Barley",
  "Bea",
  "Belle",
  "Berry",
  "Bibi",
  "Bo",
  "Bonnie",
  "Brock",
  "Bull",
  "Buster",
  "Buzz",
  "Byron",
  "Carl",
  "Charlie",
  "Chester",
  "Chuck",
  "Clancy",
  "Colette",
  "Colonel Ruffs",
  "Colt",
  "Cordelius",
  "Crow",
  "Darryl",
  "Doug",
  "Draco",
  "Dynamike",
  "Edgar",
  "El Primo",
  "Emz",
  "Eve",
  "Fang",
  "Frank",
  "Gale",
  "Gene",
  "Gray",
  "Griff",
  "Grom",
  "Gus",
  "Hank",
  "Jacky",
  "Janet",
  "Jessie",
  "Kit",
  "Larry & Lawrie",
  "Leon",
  "Lily",
  "Lola",
  "Lou",
  "Maisie",
  "Mandy",
  "Max",
  "Meg",
  "Melodie",
  "Mico",
  "Mortis",
  "Mr. P",
  "Nani",
  "Nita",
  "Otis",
  "Pam",
  "Pearl",
  "Penny",
  "Piper",
  "Poco",
  "R-T",
  "Rico",
  "Rosa",
  "Sam",
  "Sandy",
  "Shelly",
  "Spike",
  "Sprout",
  "Squeak",
  "Stu",
  "Surge",
  "Tara",
  "Tick",
  "Willow",
];
