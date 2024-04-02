type firstTaskType = {
  [key: string]: string;
};

function firstTaskType(args: firstTaskType):firstTaskType[] {
  let result:firstTaskType[] = [];

  for (const key in args) {
    if (Object.hasOwnProperty.call(args, key)) {
      result.push({ [key]: args[key] });
    }
  }
  return result;
}

function addKey(result: firstTaskType, obj: firstTaskType): void {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(result, key)) {
      result[key] += obj[key];
    } else {
      result[key] = obj[key];
    }
  }
}
function secondTask(obj1: firstTaskType, obj2: firstTaskType): firstTaskType  {
  let result:firstTaskType = {};

  addKey(result, obj1);
  addKey(result, obj2);
  return result;
}

function countFields(obj: firstTaskType): number {
  return Object.keys(obj).join('').length;
}

function fourthTask(obj: firstTaskType): string {
  const identifySign = [
    'Водолей',
    'Рыбы',
    'Овен',
    'Телец',
    'Близнецы',
    'Рак',
    'Лев',
    'Дева',
    'Весы',
    'Скорпион',
    'Стрелец',
    'Козерог',
  ];

  return identifySign[countFields(obj) % 12];
}

type countLetterType = {
  [key: string]: number;
};


function countLetter(str: string): countLetterType {
  let result:countLetterType = {};

  for (const ch of str) {
    if (!Object.hasOwnProperty.call(result, ch)) {
      result[ch] = 0;
    }
    ++result[ch];
  }
  return result;
}
function fifthTask(str: string): number {
  let count = 0;
  const letters = countLetter(str);
  for (const key in letters) {
    if (letters[key] % 2 === 0) {
      ++count;
    }
  }
  return count;
}
export {};
