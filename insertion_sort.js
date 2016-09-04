
function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    for (let j = 0; j < i; j++) {
      if (list[i] < list[j]) {
        const spliced = list.splice(i, 1)
        list.splice(j, 0, spliced[0])
      }
    }
  }
  return list
}
