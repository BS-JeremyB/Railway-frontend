import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Ajoute les fonctionnalités de base d'Angular (ngFor, ngIf, etc.)
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  musics: any[] = []; // Tableau pour stocker la liste des musiques

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.musicService.getMusics().subscribe((data: any) => {
      this.musics = data; // Stocke les musiques récupérées
    });
  }
}
