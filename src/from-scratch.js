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
      // if callback of value is true, return value 
      return arr[i];
    }
  }
  return undefined;
  // outside for loop since if callback never returns true
  // loops through whole array first 
    // don't need as an else since if statement answers question already ? 
      // didn't work with else statement 
};

const myFilter = () => {
};

const sortWords = () => {
};

const sortNumbers = () => {
};

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
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
