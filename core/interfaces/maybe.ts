import { Monad } from "@/core/interfaces/monad";

export class Maybe<T> implements Monad<T> {
  private value: T | null;

  constructor(value: T | null) {
    this.value = value;
  }
  of<T>(value: T): Monad<T> {
    return new Maybe(value);
  }

  map<U>(fn: (value: T) => U): Monad<U> {
    return this.value === null ? new Maybe<U>(null) : new Maybe<U>(fn(this.value));
  }

  flatMap<U>(fn: (value: T) => Monad<U>): Monad<U> {
    return this.value === null ? new Maybe<U>(null) : fn(this.value);
  }

  getValue(): T | null {
    return this.value;
  }
}
