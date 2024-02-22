import { Monad } from "./monad";

const test = () => {
    const sum = (a: number, b: number) => a + b;
    const addOne = (a: number) => sum(a, 1);

    const monad = Monad.of(1);
    const result = monad.map(addOne);

    console.log(result);

    const result2 = monad.bind(Monad.of);
    console.log(result2);

    const addOneMonad = (a: number) => Monad.of(sum(a, 1));

    const result3 = monad.bind(addOneMonad);
    console.log(result3);

    const toString = (a: number) => a.toString();
    const result4 = monad.map(toString);
    console.log(result4);

    // const result5 = monad.map(toString).map(addOne); // Error

    const result6 = monad.map(addOne).map(toString);
    const result7 = monad.bind(addOneMonad).map(toString);

    console.log(result6);
    console.log(result7);
}

test();