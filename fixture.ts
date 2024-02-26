export class Fixture<T> {
  private constructor(public data: T) {}

  public static of<T>(data: T): Fixture<T> {
    return new Fixture(data);
  }

  public map<T>(...fns: (Set<T>)[]): Fixture<T> {
    return fns.reduce((acc, fn) => Fixture.of(fn(acc.data)), this as any);
  }
  public value(): T {
    return this.data;
  }
}

export type Set<T> = (data: T) => T;
export type AsyncSet<T> = (data: T) => Promise<T>;