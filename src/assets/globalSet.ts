export class Hero {
    public name = 'aaa';
    age = 22;
    private sex = 'man'
    constructor() {
        console.log(this.sex)
    }
    getName() {
        return this.name
    }
}