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

function secondTask(obj1, obj2) {
  let result = {};
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(result, key)) {
      result[key] += obj1[key];
    } else {
      result[key] = obj1[key];
    }
  }
  for (const key in obj2) {
    if (Object.hasOwnProperty.call(result, key)) {
      result[key] += obj2[key];
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}
// secondTask({ cool: 'yes', value: 5 },{ cool: 'no', result: 15 });
// secondTask({ cool: 'yes', value: 5 },{ text: 'no', value: 15 });
function defineType(key) {
  if (typeof key === 'object') {
    if(key===null) {
      return null;
    } else if (key===undefined) {
      return undefined;
    } else {
      return 'array'
    }
  }
  return typeof key;

}
function addType(arr, type) {
  if (!Object.hasOwnProperty.call(arr,type)) {
    arr[type]=0;
  }
  ++arr[type];
}
function trirdTask(obj) {
  let result = {};
  for (const key in obj) {
    const type = defineType(obj[key]);
    addType(result,type);
  }
  return result;
}

// console.log(trirdTask({ test: 134 }));
// console.log(trirdTask({ test: 'hello' }));
// console.log(
//   trirdTask({ test: undefined, anotherField: [], yetAnother: [undefined] })
// );
// console.log(trirdTask({ test: undefined, anotherField: [], undefined: null }));
