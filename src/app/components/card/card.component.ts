import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICharacter } from '../../models/icharacter';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() character: ICharacter = {
    id: 0,
    name: '',
    image: '',
    ki: '',
    maxKi: '',
    race: '',
    affiliation: ''
  };
  
  @Output() id = new EventEmitter<number>();

}
