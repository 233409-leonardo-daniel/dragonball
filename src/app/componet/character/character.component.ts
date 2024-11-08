import { Component, OnInit } from '@angular/core';
import { DragonBallService } from '../../services/dragon-ball.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  character: any; 

  constructor(private dragonBallService: DragonBallService) {}

  ngOnInit(): void {
    this.fetchCharacter(2); 
  }

  fetchCharacter(id: number): void {
    this.dragonBallService.getCharacterById(id).subscribe(data => {
      this.character = data;
      console.log('Personaje obtenido:', data);
    });
  }
}