function firstTask(args) {
  let result = [];
  for (const key in args) {
    if (Object.hasOwnProperty.call(args, key)) {
      result.push({ [key]: args[key] });
    }
  }
  console.log(result);
  return result;
}
//firstTask({ cool: 'yes', option: true });
function addKey(result, obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(result, key)) {
      result[key] += obj[key];
    } else {
      result[key] = obj[key];
    }
  }
}
function secondTask(obj1, obj2) {
  let result = {};
  addKey(result, obj1);
  addKey(result, obj2);
  return result;
}

// console.log(secondTask({ cool: 'yes', value: 5 },{ cool: 'no', result: 15 }));
// console.log(secondTask({ cool: 'yes', value: 5 },{ text: 'no', value: 15 }));
function defineType(key) {
  if (typeof key !== 'object') {
    return typeof key;
  }
  switch (key) {
    case null:
      return null;
    case undefined:
      return undefined;
    default:
      return 'array';
  }
}
function trirdTask(obj) {
  let result = {};
  for (const key in obj) {
    const type = defineType(obj[key]);
    if (!Object.hasOwnProperty.call(result, type)) {
      result[type] = 0;
    }
    ++result[type];
  }
  return result;
}

// console.log(trirdTask({ test: 134 }));
// console.log(trirdTask({ test: 'hello' }));
// console.log(
//   trirdTask({ test: undefined, anotherField: [], yetAnother: [undefined] })
// );
// console.log(trirdTask({ test: undefined, anotherField: [], undefined: null }));

function countFields(obj) {
  return Object.keys(obj).join('').length;
}
function fourthTask(obj) {
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
// console.log(fourthTask({ a: 'ololo' }));
// console.log(fourthTask({ a: 'ololo', b: undefined, '1234567890': 1234567890 }));

function countLetter(str) {
  let result = {};
  for (const ch of str) {
    if (!Object.hasOwnProperty.call(result, ch)) {
      result[ch] = 0;
    }
    ++result[ch];
  }
  return result;
}
function fifthTask(str) {
  let count = 0;
  const letters = countLetter(str);
  for (const key in letters) {
    if (letters[key] % 2 === 0) {
      ++count;
    }
  }
  return count;
}
// console.log(fifthTask('dsfsdfsdfsd'));
