//2648. Generate Fibonacci Sequence

function* generateSequence() {
  let n:number = 0;
  let pred: number = 0;
  let predPred: number = 0;
  while (true) {
    if (n === 0) {
      n = n + 1;
      yield 0;
    } else if (n == 1) {
      n = n + 1;
      yield 1;
    } else if (n == 2) {
      pred = 1;
      predPred = 1;
      n = n + 1;
      yield 1;
    } else {
      const res:number = pred + predPred;
      predPred = pred;
      pred = res;
      yield res;
    }
  }
}

const gen = generateSequence();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
