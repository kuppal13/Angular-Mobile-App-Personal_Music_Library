import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{uppkaram} from "./uppkaram";
import { HeaderComponent } from './header/header.component'; 
import { FooterComponent } from './footer/footer.component';
import { mySongs } from './mySongs';
import { SongInfo } from './songInfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,
    FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uppkaramA3';
  bio : uppkaram = {
    sid: 991727467, sname: "Karamjeet",
    sloginName: 'uppkaram',
    scampus: 'Davis',
    sassigTittle: 'AngularProjeject'
  };
  songs: SongInfo[] = mySongs; // Assuming mySongs is an array of SongInfo.
  selectedSong: SongInfo | null = null;

  onSelectSong(index: number): void {
    this.selectedSong = this.songs[index];
  }
}

