import { ArrayLikeEnumerable, ArrayLikeIterable, EnumerableIterable } from "./IteratorIF";


test('ArrayLikeIterable는 Object를 iterable하게 만들어준다.', () => {
    const mock = { 0: 'a', 3: 'c', 1: 'b' };
    const expectResult = ['a', 'b', 'c'];
    const arrayLikeNew = new ArrayLikeIterable(mock);
    const result: string[] = [];

    for (let el of arrayLikeNew) {
        result.push(el);
    }

    expect(result).toEqual(expectResult);
})


test('ArrayLikeEnumberable은 Object를 enumerable하게 만들어준다.', () => {
    const mock = { 0: 'a', 3: 'c', 1: 'b' };
    const expectResult = ['a', 'b', 'c'];
    const arrayLike = new ArrayLikeEnumerable(mock);
    const result: string[] = [];

    result.push(arrayLike.item());
    arrayLike.moveNext();



    while (arrayLike.item()) {
        result.push(arrayLike.item());
        arrayLike.moveNext();
    }

    expect(result).toEqual(expectResult);
})

test('Adapter는 Enumerable을 Iterable로 만든다', () => {
    const mock = { 0: 'a', 3: 'c', 1: 'b' };
    const expectResult = ['a', 'b', 'c'];

    const adaptedEnumerable = new EnumerableIterable(new ArrayLikeEnumerable(mock));

    const result: string[] = [];

    for (let el of adaptedEnumerable) {
        result.push(el);
    }

    console.log({ result, });

    expect(result).toEqual(expectResult);

})