import { Component } from '@angular/core';
import { ICharacter } from '../../models/icharacter';
import { DragonBallService } from '../../services/dragon-ball.service';
import { Router } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,NavbarComponent,CommonModule,DialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  characters: ICharacter[] = [];
  selectedCharacter: any;

  constructor(readonly charactersService: DragonBallService, private router: Router) { 
    this.charactersService.getCharacters().subscribe((data: any) => {
      this.characters = data.items;
    });
  }

  getCharacterIdHandler(id: number) {
    this.charactersService.getCharacterById(id).subscribe((data: any) => {
      this.selectedCharacter = data;
      this.visible = true;
    });
  }

  ngOnInit(): void {
    
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

}
