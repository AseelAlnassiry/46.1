// add whatever parameters you deem necessary
function averagePair(arr, t) {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const c = (arr[l] + arr[r]) / 2;
    if (c === t) return true;
    else if (c < t) l++;
    else r--;
  }

  return false;
}

module.exports = averagePair