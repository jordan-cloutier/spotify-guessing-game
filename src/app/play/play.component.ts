import { Component, OnInit, Input } from '@angular/core';
import fetchFromSpotify, { request } from "../../services/api";
import { SelectService } from "src/services/select.service";
import { AuthService } from 'src/services/auth.service';
import { Artist } from 'src/artist';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  
  constructor(private selectService : SelectService, private authService : AuthService) {}
  genre: String = '';
  token: String = '';

  //Need to find a way to get the selected number of song/artist options from HomeComponent
  songNumber: number = 1;
  artistsNumber: number = 2;
  artistAnswer: Artist = new Artist;
  artistList: Array<Artist> = new Array<Artist>;

  ngOnInit(): void {
    this.genre = this.selectService.getGenre();
    this.token = this.authService.getToken();
    console.log(this.authService.getToken());
    console.log(this.selectService.getGenre());
    console.log(this.getArtists(this.token));
    console.log(this.getTopTracks(this.token, this.artistAnswer.getId()));
  }

  playTrack1() {
    new Audio("https://p.scdn.co/mp3-preview/877602f424a9dea277b13301ffc516f9fd1fbe7e?cid=74f434552d40467782bc1bc64b12b2e9").play();
  }

  playTrack2() {
    new Audio("https://p.scdn.co/mp3-preview/d79918fba2888bf825a5edc938ce1f79ed12ff7b?cid=74f434552d40467782bc1bc64b12b2e9").play();
  }

  playTrack3() {
    new Audio("https://p.scdn.co/mp3-preview/dd4996bcd5ea34f70d66213a698a4e9879f69907?cid=74f434552d40467782bc1bc64b12b2e9").play();
  }


  getArtists = async(token: String) => {
    const response : any = await (fetchFromSpotify({token: token, endpoint: 'search', params: {q: `genre%3A${this.genre}`, type: 'artist', limit: `${this.artistsNumber}`}}))
    .then(a => {
        console.log(a);
        for(let i = 0; i < this.artistsNumber; i++) {
          let picture = a.artists.items[i].images[0].url;
          let name = a.artists.items[i].name;
          let id = a.artists.items[i].id;
          this.artistList.push(new Artist(picture, name, id));
        }
        let randomIndex = Math.floor(Math.random() * (this.artistsNumber));
        this.artistAnswer = this.artistList[randomIndex];
    })
    console.log(this.artistAnswer.getId());
  }

  getTopTracks = async(token : String, id: String) => {
    const reponse : any = await (fetchFromSpotify({token: token, endpoint: `artists/${id}/top-tracks`, params: {market: 'ES'}}))
    .then(a => {
      console.log(a);
    });
  }
  
}
