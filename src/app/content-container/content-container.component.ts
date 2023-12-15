import { Component, OnInit } from '@angular/core';

//Services
import { GenerateCharacterService } from '../generate-character.service';

import { Character } from '../character.interface';
import * as CharacterChoiceData from '../character-choices';
/* CharacterChoiceData includes : enum Faction, enum AllianceRaces, enum HordeRaces, enum Gender,
object RaceClassList, array GatheringProfessions, object of objects ProductionProfessions */

@Component({
    selector: 'app-content-container',
    templateUrl: './content-container.component.html',
    styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {

    //GeneratedCharacter object
    generatedCharacter: Character;
    factionColor: string;




    constructor(private generateCharacter: GenerateCharacterService) {
        this.generatedCharacter = this.generateCharacter.getGeneratedCharacter();
        this.factionColor = '';

    }

    ngOnInit() {

        this.generateCharacter.currentCharacterData.subscribe
            (data => {
                this.generatedCharacter = data;
                if (this.generatedCharacter.faction === CharacterChoiceData.Faction[1]) { this.factionColor = "blue" }
                else { this.factionColor = "red" };
                if (this.generatedCharacter.race === CharacterChoiceData.AllianceRaces[4]) {
                    this.generatedCharacter.race = "Night Elf"
                };

            });

    }

}
