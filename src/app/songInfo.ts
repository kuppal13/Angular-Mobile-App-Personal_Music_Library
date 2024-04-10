
export class SongInfo {
    songName: string;
    artist: string;
    genre: string;
    yearReleased: number;
    picture: string;
  
    constructor(songName: string, artist: string, genre: string, yearReleased: number, picture: string) {
      this.songName = songName;
      this.artist = artist;
      this.genre = genre;
      this.yearReleased = yearReleased;
      this.picture = picture; // Relative path to image in the images folder
    }
  }
  