import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//Data
import * as CharacterChoiceData from '../app/character-choices';

//Interfaces
import { Character } from './character.interface';

@Injectable({
  providedIn: 'root'
})
export class GenerateCharacterService {

  generatedCharacter: Character = {
    faction: "Alliance",
    race: "Human",
    characterClass: "Warrior",
    gender: "Female",
    clicked: false
  };


  private characterData = new BehaviorSubject<Character>(this.generatedCharacter);
  currentCharacterData = this.characterData.asObservable();



  characterRandomizer(): Character {
    //Build the character.
    //Would need a few variables for information they choose themselves such as faction, race, etc. 
    //Could have a button that turns professions off
    //Need a function to choose the faction
    //Function to choose race based on faction choice
    //Function to choose class based on race
    //Function to choose professions

    //If factionChoice == null, generate faction, else generatedFaction = factionChoice
    //If race choice is chosen, faction generatedFaction = race.faction


    const generatedFaction = this.generateFaction();

    const generatedRace = this.generateRace(generatedFaction);

    const generatedCharacterClass = this.generateCharacterClass(generatedRace.classList);

    const generatedGender = this.generateGender();

    const generatedProfessions = this.generateProfessions();

    let clicked = false;


    this.generatedCharacter = {
      faction: generatedFaction,
      race: generatedRace.race,
      characterClass: generatedCharacterClass,
      gender: generatedGender,
      gatheringProfession: generatedProfessions[0],
      productionProfession: generatedProfessions[1],
      clicked: true
    }

    console.log(this.generatedCharacter)
    console.log(this.generatedCharacter.clicked);

    this.updateCharacter(this.generatedCharacter);

    return this.generatedCharacter;

  }

  getGeneratedCharacter(): Character {
    return this.generatedCharacter;
  }

  updateCharacter(character: Character) {
    this.characterData.next(character);
  }

  generateFaction(raceOption?: string, characterClass?: string): string {
    //If race is chosen, need to determine its faction, same for class if it's paladin or shaman.
    //So, if class != paladin or shaman, choose either faction
    //If paladin is picked, choose alliance, else if shaman, pick horde
    if (raceOption === undefined && characterClass === undefined) {
      let factionNumber = this.generateRandomNumber(1, 2);
      return CharacterChoiceData.Faction[factionNumber];
    }

    return "Error: Faction Not Chosen in generateFaction()";

  }

  /*Generate race produces pretty much everything necessary for the class. If faction is chosen, it's already assigned.
  If class is chosen it finds a race that contains the class. then randomizes those.  */
  generateRace(factionOption?: string, characterClassOption?: string): { race: string, faction: string, classList: string[] } {

    if (factionOption != null) {

      const factionRaceList = CharacterChoiceData.RaceList.filter(x => x.faction === factionOption);
      let generatedIndex = this.generateRandomNumber(0, factionRaceList.length - 1);

      let generatedRace = factionRaceList[generatedIndex];

      return generatedRace;

    }

    return {
      race: "Error: Race Not Chosen in generateRace()",
      faction: "Error: Faction Not Chosen in generateRace()",
      classList: ["Error: Class List Not Chosen in generateRace()"]
    };


  }
  generateCharacterClass(characterRaceOption: string): string;
  generateCharacterClass(classOptions: string[]): string;
  generateCharacterClass(input: string | string[]): string {

    if (typeof input === 'string') {
      return input;
    }
    else {
      let generatedIndex = this.generateRandomNumber(0, input.length - 1);

      return input[generatedIndex];
    }
    return "Error: Class Not Chosen in generateCharacterClass()";
  }

  generateGender(): string {
    try {
      let generatedEnumValue = this.generateRandomNumber(1, 2);
      return CharacterChoiceData.Gender[generatedEnumValue];
    } catch (error) {

      return "Error: Gender Not Chosen";
    }
  }


  generateProfessions(viable?: boolean, characterClass?: string): string[] {
    try {
      let generatedIndex = this.generateRandomNumber(0, CharacterChoiceData.Professions.length - 1);
      console.log(generatedIndex);

      let generatedProfessionData = CharacterChoiceData.Professions[generatedIndex];

      let generatedProfessions = [generatedProfessionData.gatheringProfession, generatedProfessionData.productionProfession];

      return generatedProfessions;

    } catch (error) {
      return ["Error: Gathering Profession Not Chosen", "Error: Production Profession Not Chosen"]
    }
  }


  // generateGatheringProfession(viable?: boolean, characterClass?: string) {



  //   return "Error: Race Not Chosen";
  // }

  // generateProductionProfession(gatheringProfession?: string) {
  //   return "Error: Race Not Chosen";
  // }


  generateRandomNumber(min: number, max: number): number {
    let generatedNumber;
    //Takes the min number and rounds it up.
    min = Math.ceil(min);
    //Takes the max number and rounds it down.
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  constructor() { }
}
