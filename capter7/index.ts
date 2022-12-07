import { MallardDuck } from './Duck';
import { DuckTurkey } from './DuckTurkey';
import { WildTurkey } from './Turkey';
import { TurkeyAdapter } from "./TurkeyAdapter";

(() => {
    const wildTurkey = new WildTurkey();
    const fakeDuck = new TurkeyAdapter(wildTurkey);
    console.log("칠면조 어댑터는 이렇게 납니다");
    fakeDuck.fly();
    console.log("칠면조 어댑터는 이렇게 웁니다");
    fakeDuck.quack();

    const mallardDuck = new MallardDuck();
    const fakeTurkey = new DuckTurkey(mallardDuck);
    console.log("오리 어댑터는 이렇게 납니다");
    fakeTurkey.fly();
    console.log("오리 어댑터는 이렇게 웁니다");
    fakeTurkey.gobble();
})()