function zipList(list1, list2) {
  const result = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }

  return result;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten([_.zip(list1, list2)]);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(zipList(numbers, letters));
console.log(zipListTheSimpleWay(numbers, letters));
