import {Track} from 'src/track'

export class Artist {
    private picture: String = '';
    private name: String = '';
    private id: String = '';
    private tracks: Array<Track> = new Array<Track>;
    constructor(picture? : String, name? : String, id? : String) {
        if(picture) {
            this.picture = picture;
        }
        if(name) {
            this.name = name;
        }
        if(id) {
            this.id = id;
        }
    }
    getPicture() {
        return this.picture;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    setGenre(picture : String) {
        this.picture = picture;
    }
    setName(name : String) {
        this.name = name;
    }
    setId(id: String) {
        this.id = id;
    }
    addTrack(track: Track) {
        this.tracks.push(track);
    }
    getTracks() {
        return this.tracks;
    }
}