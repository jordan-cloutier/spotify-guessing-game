import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SelectService {
   genre: String = '';
   songNumber: number = NaN;
   artistNumber: number = NaN;

   constructor() { }

   setGenre(genre: String) {
    this.genre = genre;
   }

   getGenre() {
    return this.genre;
   }

   setSongNumber(songNumber: number) {
      this.songNumber = songNumber;
   }

   getSongNumber() {
      return this.songNumber;
   }

   setArtistNumber(artistNumber: number) {
      this.artistNumber = artistNumber;
   }
}