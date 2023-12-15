import { Component } from '@angular/core';
import { GenerateCharacterService } from '../generate-character.service'


@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.scss'],

})
export class CharacterdetailsComponent {

  constructor(private generateCharacterService: GenerateCharacterService) {

  }

  onButtonClick() {
    this.generateCharacterService.characterRandomizer();
  }

}
