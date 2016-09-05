function quickSort(list) {
  if (list.length < 2) {
    return list
  }
  const pivot = list.pop()
  const left = []
  const right = []

  for (const el of list) {
    if (el < pivot) left.push(el)
    else right.push(el)
  }

  return [].concat(quickSort(left), pivot, quickSort(right))
}
