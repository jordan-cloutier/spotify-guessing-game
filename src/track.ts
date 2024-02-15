export class Track {
    private name: String;
    private id: String;
    constructor() {
        this.name = "";
        this.id = "";
    }
    setName(name : String) {
        this.name = name;
    }
    setId(id : String) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
}