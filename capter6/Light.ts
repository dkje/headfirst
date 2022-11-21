import { Light as LightIF } from './Light.type';

export class Light implements LightIF {
    off(): void {
        console.log("불 꺼!!!")
    }
    on(): void {
        console.log("불 켜!!!")
    }
}