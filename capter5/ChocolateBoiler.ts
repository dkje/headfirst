class ChocolateBoiler {
  #empty: boolean;
  #boiled: boolean;

  constructor() {
    this.#empty = true;
    this.#boiled = false;
  }

  isEmpty() {
    return this.#empty;
  }

  isBoiled() {
    return this.#boiled;
  }

  fill(): void {
    if (!this.isEmpty())
      return;
    // 보일러에 우유와 초콜렛을 혼합한 재료를 넣음
    this.#empty = false;
    this.#boiled = false;
  }

  drain() {
    if (!this.isBoiled())
      return;
    if (this.isEmpty())
      return;
    // 끓는 초콜렛을 다음 단계로 넘긴다
    this.#empty = true;
  }

  boil() {
    if (this.isEmpty())
      return;
    if (this.isBoiled())
      return;
    // 채워져있으면 끓인다
    this.#boiled = true;
  }
}

export default ChocolateBoiler;