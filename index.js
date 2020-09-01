// #findMinAndRemoveSorted should return the smallest element of an array:
// remove the smallest element from an array
function findMinAndRemoveSorted(array) {
  return array.shift()
}

// #merge should merge two sorted arrays to produce one sorted array:
function merge(firstSubarray, secondSubArray) {
  let sorted = []
  while (firstSubarray.length != 0 && secondSubArray.length != 0) {
    let minfirstHalf = firstSubarray[0];
    let minsecondHalf = secondSubArray[0];
    if (minfirstHalf < minsecondHalf) {
      sorted.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}

// #mergeSort should sort an unsorted array:
function mergeSort(array) {
  let midpoint = array.length / 2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if (array.length < 2) {
    return array
  } else {
    let sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}