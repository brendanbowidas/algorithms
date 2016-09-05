
function mergeSort(list) {
  if (list.length < 2) {
    return list
  }
  const length = list.length
  const middle = Math.floor(length / 2)
  const left = list.slice(0, middle)
  const right = list.slice(middle, length)

  return stitch(mergeSort(left), mergeSort(right))
}

function stitch(left, right) {
  const results = []

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  while (left.length) {
    results.push(left.shift())
  }
  while (right.length) {
    results.push(right.shift())
  }
  return results
}
