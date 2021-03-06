import {Component, OnInit} from '@angular/core';
import {ListMusicService, Music} from "../partage/service/list-music.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  music: Music = {};

  constructor(private readonly listMusicService: ListMusicService) {}

  ngOnInit(): void {
    this.random();
  }

  random() {
    this.listMusicService.fetchRandom().subscribe(music => {
      this.music = music;
    });
  }

  delete(person: Music) {
    this.listMusicService.delete(person.id!).subscribe(personnel => {
      this.random();
    });
  }
}
