//Data file that holds all the possible choices for the generated character.

// Faction Choice
export enum Faction {
    Alliance = 1,
    Horde
}

//Enum for alliance races
export enum AllianceRaces {
    Human = 1,
    Dwarf,
    Gnome,
    NightElf
}

//enum for Horde Races
export enum HordeRaces {
    Orc = 1,
    Troll,
    Tauren,
    Undead
}

//A list of the races, with their classes and factions. This is used for when the options are enabled.


//Enum for gender
export enum Gender {
    Female = 1,
    Male
}

//Base class list to be used throughout the rest of this file.
const BaseClassList = {
    Druid: "Druid",
    Hunter: "Hunter",
    Mage: "Mage",
    Paladin: "Paladin",
    Priest: "Priest",
    Rogue: "Rogue",
    Shaman: "Shaman",
    Warlock: "Warlock",
    Warrior: "Warrior"
}

export const RaceList =
    [
        {
            race: "Human",
            faction: "Alliance",
            classList: [BaseClassList.Mage,
            BaseClassList.Paladin,
            BaseClassList.Priest,
            BaseClassList.Rogue,
            BaseClassList.Warlock,
            BaseClassList.Warrior]
        },
        {
            race: "Dwarf",
            faction: "Alliance",
            classList: [BaseClassList.Hunter,
            BaseClassList.Paladin,
            BaseClassList.Priest,
            BaseClassList.Rogue,
            BaseClassList.Warrior]
        },
        {
            race: "Gnome",
            faction: "Alliance",
            classList: [BaseClassList.Mage,
            BaseClassList.Rogue,
            BaseClassList.Warlock,
            BaseClassList.Warrior]
        },
        {
            race: "NightElf",
            faction: "Alliance",
            classList: [BaseClassList.Druid,
            BaseClassList.Hunter,
            BaseClassList.Priest,
            BaseClassList.Rogue,
            BaseClassList.Warrior]
        },
        {
            race: "Orc",
            faction: "Horde",
            classList: [BaseClassList.Hunter,
            BaseClassList.Rogue,
            BaseClassList.Shaman,
            BaseClassList.Warlock,
            BaseClassList.Warrior]
        },
        {
            race: "Tauren",
            faction: "Horde",
            classList: [BaseClassList.Druid,
            BaseClassList.Hunter,
            BaseClassList.Shaman,
            BaseClassList.Warrior]
        },
        {
            race: "Troll",
            faction: "Horde",
            classList: [BaseClassList.Hunter,
            BaseClassList.Mage,
            BaseClassList.Priest,
            BaseClassList.Rogue,
            BaseClassList.Warrior,
            BaseClassList.Shaman]
        },
        {
            race: "Undead",
            faction: "Horde",
            classList: [BaseClassList.Mage,
            BaseClassList.Priest,
            BaseClassList.Rogue,
            BaseClassList.Warlock,
            BaseClassList.Warrior]
        },

    ]


//An array of races
//Race list with their associated classes
export let RaceClassLists = {
    Human: [BaseClassList.Mage,
    BaseClassList.Paladin,
    BaseClassList.Priest,
    BaseClassList.Rogue,
    BaseClassList.Warlock,
    BaseClassList.Warrior],

    Dwarf: [BaseClassList.Hunter,
    BaseClassList.Paladin,
    BaseClassList.Priest,
    BaseClassList.Rogue,
    BaseClassList.Warrior],

    Gnome: [BaseClassList.Mage,
    BaseClassList.Rogue,
    BaseClassList.Warlock,
    BaseClassList.Warrior],

    NightElf: [BaseClassList.Druid,
    BaseClassList.Hunter,
    BaseClassList.Priest,
    BaseClassList.Rogue,
    BaseClassList.Warrior],

    Orc: [BaseClassList.Hunter,
    BaseClassList.Rogue,
    BaseClassList.Shaman,
    BaseClassList.Warlock,
    BaseClassList.Warrior],

    Tauren: [BaseClassList.Druid,
    BaseClassList.Hunter,
    BaseClassList.Shaman,
    BaseClassList.Warrior],

    Troll: [BaseClassList.Hunter,
    BaseClassList.Mage,
    BaseClassList.Priest,
    BaseClassList.Rogue,
    BaseClassList.Warrior,
    BaseClassList.Shaman],

    Undead: [BaseClassList.Mage,
    BaseClassList.Priest,
    BaseClassList.Rogue,
    BaseClassList.Warlock,
    BaseClassList.Warrior]
}


//Array of gathering professions. Used an array to have double mining to enable the production profession choice.
export let GatheringProfessions = [
    "Mining", "Mining", "Herbalism", "Skinning", "Tailoring"
]


//Production professions object of objects to hold all info and weighted choices for them.
export let Professions = [
    {
        productionProfession: "Blacksmithing",
        gatheringProfession: "Mining",
        randomizerNumber: 1,
        soloViable: true,
        weightedClassList: [BaseClassList.Warrior, BaseClassList.Paladin]
    },
    {
        productionProfession: "Engineering",
        gatheringProfession: "Mining",
        randomizerNumber: 2,
        soloViable: true,
        weightedClassList: [BaseClassList.Druid, BaseClassList.Hunter, BaseClassList.Mage, BaseClassList.Paladin, BaseClassList.Priest, BaseClassList.Rogue, BaseClassList.Shaman, BaseClassList.Warlock, BaseClassList.Warrior]
    },
    {
        productionProfession: "Alchemy",
        gatheringProfession: "Herbalism",
        randomizerNumber: 3,
        soloViable: true,
        weightedClassList: [BaseClassList.Druid, BaseClassList.Hunter, BaseClassList.Mage, BaseClassList.Paladin, BaseClassList.Priest, BaseClassList.Rogue, BaseClassList.Shaman, BaseClassList.Warlock, BaseClassList.Warrior]
    },
    {
        productionProfession: "Leatherworking",
        gatheringProfession: "Skinning",
        randomizerNumber: 4,
        soloViable: true,
        weightedClassList: [BaseClassList.Druid, BaseClassList.Hunter, BaseClassList.Rogue, BaseClassList.Shaman]
    },
    {
        productionProfession: "Enchanting",
        gatheringProfession: "Tailoring",
        randomizerNumber: 5,
        soloViable: false,
        weightedClassList: [BaseClassList.Mage, BaseClassList.Priest, BaseClassList.Warlock]
    }
]



