// add whatever parameters you deem necessary
function separatePositive(arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    if (arr[l] > 0 && arr[r] > 0) l++;
    else if (arr[l] < 0 && arr[r] < 0) r--;
    else {
      // Switch
      const temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    }
  }

  return arr;
}

module.exports = separatePositive;
