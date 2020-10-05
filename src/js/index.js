/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let mostFrequent = array => {
    let maxCount = -1;
    let maxItem = null;
    let count = {}; // In this dictionary we will store the number in the array (key) and the times this number repeats (value)
    // This loops through each item of a given array
    for (const item of array) {
      // Here we can check if the "item" in the given array has already appeared, if not, it will create the new key (the number)
      // and value (set the count to 1), if it already exists in the dictionary it will +1 the count of times the item has appeared
      if (item in count) {
        count[item] += 1;
      } else {
        count[item] = 1;
      }
      // Here we check the number of times that an item has appeared and gives to maxCount the value of the item that has appeared the most
      // and to maxItem the key of the same item.
      if (count[item] > maxCount) {
        maxCount = count[item];
        maxItem = item;
      }
    }
    // console.log(count);
    return maxItem;
  };
  //  # most_frequent(list1) should return 1.
  let list1 = [1, 3, 1, 3, 2, 1];
  // # most_frequent(let list2) should return 3.
  let list2 = [3, 3, 1, 3, 2, 1];
  // # most_frequent(let list3) should return Null.
  let list3 = [];
  // # most_frequent(let list4) should return 0.
  let list4 = [0];
  // # most_frequent(let list5) should return -1.
  let list5 = [0, -1, 10, 10, -1, 10, -1, -1, -1, 1];

  console.log(mostFrequent(list1), "list 1");
  console.log(mostFrequent(list2), "list 2");
  console.log(mostFrequent(list3), "list 3");
  console.log(mostFrequent(list4), "list 4");
  console.log(mostFrequent(list5), "list 5");
};
