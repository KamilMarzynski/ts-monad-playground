export class Monad<T> {
    constructor(public value: T) {
        this.value = value;
    }

    static of<T>(value: T): Monad<T> {
        return new Monad(value);
    }

    map<U>(fn: (value: T) => U): Monad<U> {
        return new Monad(fn(this.value));
    }

    bind<U>(fn: (value: T) => Monad<U>): Monad<U> {
        return fn(this.value);
    }
}