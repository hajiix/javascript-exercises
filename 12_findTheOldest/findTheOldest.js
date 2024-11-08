const findTheOldest = function (people) {
  currentYear = new Date().getFullYear();
  people.sort(
    (person1, person2) =>
      (person2.yearOfDeath
        ? person2.yearOfDeath - person2.yearOfBirth
        : currentYear - person2.yearOfBirth) -
      (person1.yearOfDeath
        ? person1.yearOfDeath - person1.yearOfBirth
        : currentYear - person1.yearOfBirth)
  );
  return people[0];
};

//Time complexity is nlogn. Could find better appraoch.
// Do not edit below this line
module.exports = findTheOldest;
