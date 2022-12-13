import { Coffee, Tea } from './Beverage';

const main = () => {
    console.log("---- 차 끓기기")
    const tea = new Tea();
    tea.prepareBeverage();

    console.log("---- 커피 끓기기")
    const coffee = new Coffee();
    coffee.prepareBeverage();
}
main();