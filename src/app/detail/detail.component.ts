import { Component, OnInit } from '@angular/core';
import { SongInfo } from '../songInfo';
import { mySongs } from '../mySongs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  songs: SongInfo[] = mySongs;
  selectedSong: SongInfo | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectSong(index: number): void {
    this.selectedSong = this.songs[index];
  }
}