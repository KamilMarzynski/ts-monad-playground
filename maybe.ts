export type Optional<T> = T | null;

export class Maybe<T> {
    constructor(public value: Optional<T>) {
        this.value = value;
    }

    static of<T>(value: Optional<T>): Maybe<T> {
        return new Maybe(value);
    }

    bind<U>(fn: (value: T) => Maybe<U>): Maybe<T> | Maybe<U> {
        return this.value != null ? fn(this.value) : this;
    }
}