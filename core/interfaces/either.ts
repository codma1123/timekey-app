import { Monad } from "@/core/interfaces/monad";

export class Either<L, R> implements Monad<R> {
  private left: L | null;
  private right: R | null;

  constructor(left: L | null, right: R | null) {
    this.left = left;
    this.right = right;
  }
  of<T>(value: T): Monad<T> {
    throw new Error("Method not implemented.");
  }

  map<U>(fn: (value: R) => U): Monad<U> {
    return this.right === null ? new Either<L, U>(this.left, null) : new Either<L, U>(this.left, fn(this.right));
  }

  flatMap<U>(fn: (value: R) => Monad<U>): Monad<U> {
    return this.right === null ? new Either<L, U>(this.left, null) : fn(this.right);
  }

  flatMapLeft<T>(fn: (value: L) => Either<L, R>): Either<L, R> {
    return this.left === null ? new Either<L, R>(null, this.right) : fn(this.left);
  }

  getValue(): R | null {
    return this.right;
  }
}
