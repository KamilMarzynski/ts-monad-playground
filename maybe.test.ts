import { Maybe } from "./maybe";

const test = () => {
    const sum = (a: number, b: number) => a + b;

    const maybe = Maybe.of(1);
    const result = maybe.bind(Maybe.of);

    console.log(result);

    const addOneMaybe = (a: number) => Maybe.of(sum(a, 1));

    const result2 = maybe.bind(addOneMaybe);
    console.log(result2);


    const result3 = maybe.bind(addOneMaybe);
    console.log(result3);

    const safeDivide = (a: number, b: number) => b === 0 ? Maybe.of(null) : Maybe.of(a / b);

    const result4 = Maybe.of(10).bind(a => safeDivide(a, 2)).bind(a => safeDivide(a, 0));


    const result5 = Maybe.of(2).bind(a => safeDivide(a, 0));

    console.log(result4);
    console.log(result5);
}

test();