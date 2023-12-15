export interface Character {
    faction: string,
    race: string,
    characterClass: string,
    gender: string,
    gatheringProfession?: string,
    productionProfession?: string,
    clicked: boolean
}
