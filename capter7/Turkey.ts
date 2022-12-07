export interface Turkey {
    gobble(): void;
    fly(): void;
}
export class WildTurkey implements Turkey {
    gobble(): void {
        console.log("골골");
    }
    fly(): void {
        console.log("퍼덕");
    }

}
