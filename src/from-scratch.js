const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
    // passes each element of the array to the callback function
  }
};

const myMap = (arr, callback) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
    // let element = callback(arr[i]);
    // newArr.push(element);
  }
  return newArr;
};

const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      // if callback of value is truthy, return value 
      return arr[i];
    }
  }
  return undefined;
  // outside for loop since if callback never returns true
  // loops through whole array first 
    // don't need as an else since if statement answers question already ? 
      // didn't work with else statement 
};

const myFilter = (arr, callback) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    } 
  }
  return newArr; 
};

const sortWords = (arr) => {
  return [...arr].sort();
  // const arrCopy = [...arr].sort();
  // return arrCopy; 
  // arrCopy = [...arr];
  // return arrCopy.sort();
};

const sortNumbers = (arr) => {
  return [...arr].sort((a, b) => a - b);
    // need comparison of a - b since sort default is for strings
  // const arrCopy = [...arr];
  // return arrCopy.sort((a, b) => a - b);
};

const sortNumbersBetter = (arr, isDescending) => {
  if (isDescending === true) {
    return [...arr].sort((a, b) => b - a);
  } else {
    return arrCopy = [...arr].sort((a, b) => a - b);
  }
};

const sortUsersByOrder = (users) => {
  return [...users].sort((a, b) => a.order - b.order);
  // const arrCopy = [...users];
  // arrCopy.sort((a, b) => a.order - b.order);
  // return arrCopy;
};

const sortUsersByName = (users) => {
  const arrCopy = [...users];
  arrCopy.sort((a, b) => {
    if (a.name > b.name) {
      return 1; 
      // b should come before a  
    } else if (a.name < b.name) {
      return -1;
      // a should come before b 
    } else {
      return 0;
      // names are the same 
    }
  });
  return arrCopy;
  // not sure how to implement callback here 
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
