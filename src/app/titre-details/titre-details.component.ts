import { Component, OnInit } from '@angular/core';
import { ListMusicService } from '../partage/service/list-music.service';
import { Music } from '../partage/service/list-music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-titre-details',
  templateUrl: './titre-details.component.html',
  styleUrls: ['./titre-details.component.scss']
})
export class TitreDetailsComponent implements OnInit {

  music!: Music;
  id: string|null;

  constructor(private readonly listMusicService: ListMusicService, private readonly route: ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get("id");
    this.listMusicService.fetchOne(this.id).subscribe(music =>{
        this.music=music;
      });
  }

  ngOnInit(): void {
  }


}
