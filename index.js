// #findMinAndRemoveSorted should return the smallest element of an array:
// remove the smallest element from an array
function findMinAndRemoveSorted(array) {
  return array.shift()
}

// #merge should merge two sorted arrays to produce one sorted array:
function merge(firstHalf, secondHalf) {
  let sorted = [];
  while (firstHalf.length != 0 && secondHalf.length != 0) {
    let minfirstHalf = firstHalf[0];
    let minsecondHalf = secondHalf[0];
    if (minfirstHalf < minsecondHalf) {
      sorted.push(minfirstHalf)
      findMinAndRemoveSorted(firstHalf)
    } else {
      sorted.push(minsecondHalf)
      findMinAndRemoveSorted(secondHalf)
    }
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}

// #mergeSort should sort an unsorted array:
function mergeSort(array) {
  let firstHalf = array.slice(0, array.length / 2)
  let secondHalf = array.slice(array.length / 2, array.length)

  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}