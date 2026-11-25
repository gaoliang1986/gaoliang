/**
 * 冒泡排序：将数组按升序原地排序。
 * @param {number[]} arr 待排序的数组
 * @returns {number[]} 排序后的同一个数组
 */
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // 本轮没有发生交换，说明数组已经有序，可以提前结束。
    if (!swapped) break;
  }

  return arr;
}

module.exports = bubbleSort;

if (require.main === module) {
  console.log(bubbleSort([5, 2, 9, 1, 5, 6]));
}
