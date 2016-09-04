function binarySearch(list, target) {
  let low = 0
  let high = list.length - 1
  while (low <= high) {
    let mid = Math.round((low + high) / 2)
    let guess = list[mid]
    if (guess == target) {
      return mid
    }
    if (guess > target) {
      high = mid - 1
    } else low = mid + 1
  }
  return -1
}
