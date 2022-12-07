export class ArrayLikeIterable<T> implements Iterable<T> {
    #elements: Record<number, T>;
    #index: number = 0;

    constructor(elements: Record<number, T>) {
        this.#elements = elements;
    }

    [Symbol.iterator](): Iterator<T, any, undefined> {
        return ({
            next: () => {
                const hasNext = this.hasNext();
                if (!hasNext) return { value: undefined, done: true };

                let maybeElement: T | undefined = undefined;
                while (!maybeElement) {
                    maybeElement = this.#elements[this.#index];
                    if (maybeElement) {
                        delete this.#elements[this.#index];
                        break;
                    }
                    this.#index++;
                }
                const iterResult = { value: maybeElement, done: !maybeElement };

                return iterResult;
            },
        })
    }

    hasNext(): boolean {
        return Object.keys(this.#elements).length > 0;
    };

}

export class ArrayLikeEnumerable<T> implements Enumerator<T>{
    #elements: Record<number, T>;
    #index: number = 0;
    #lastIndex: number;
    #firstIndex: number;
    constructor(elements: Record<number, T>) {
        this.#elements = elements;
        const keys = Object.keys(this.#elements).map((el) => Number(el));
        this.#lastIndex = Math.max(...keys);
        this.#firstIndex = Math.min(...keys);
        this.#index = this.#firstIndex;
    }

    atEnd(): boolean {
        return this.#index > this.#lastIndex;
    }
    item(): T {
        return this.#elements[this.#index];
    }
    moveFirst(): void {
        this.#index = this.#firstIndex;
    }
    moveNext(): void {
        let maybeItem: undefined | T = undefined;
        while (!maybeItem && !this.atEnd()) {
            this.#index = this.#index + 1;
            maybeItem = this.#elements[this.#index];
        }
    }

}

export class EnumerableIterable<T> implements Iterable<T>{
    #enumerable: ArrayLikeEnumerable<T>;

    constructor(enumerable: ArrayLikeEnumerable<T>) {
        this.#enumerable = enumerable;
    }

    [Symbol.iterator](): Iterator<T, any, undefined> {
        return ({
            next: () => {
                const value = this.#enumerable.item();
                const done = this.#enumerable.atEnd();
                this.#enumerable.moveNext();

                return { value, done }
            }
        })
    }

}