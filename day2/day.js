class ArrayUtilities {
  /* Your magic here */
  static addZeros(numbers) {
    const num = numbers.map((number) => String(number));
    const num2 = num.map((number) => `${number}0`);
    return num2.map((number) => Number(number));
  }
  static moreThanFifty = (numbers) => {
    const num = numbers.filter((number) => number > 50);
    return num;
  };
  static removeFirst = (numbers) => {
    numbers.shift();
    return numbers;
  };
  static sumAll = (numbers) => {
    let sum = 0;
    numbers.forEach((number) => (sum += number));
    return sum;
  };
  static divide = (num) => {
    const arr = num.toString();
    return [...arr];
  };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
