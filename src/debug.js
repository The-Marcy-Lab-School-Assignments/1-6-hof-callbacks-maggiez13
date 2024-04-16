const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
    // check if callback does not have value  
  }
  return true;
  // only if all elements have values
};


const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction);
};

const logEachName = (names) => {
  return names.forEach(console.log);
};

const logEachUserBio = (users) => {
  return users.forEach((user) => console.log(user.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
