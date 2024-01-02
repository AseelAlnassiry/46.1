// add whatever parameters you deem necessary
function isSubsequence(s1, s2) {
  let m1 = 0;
  let m2 = 0;
  while (m2 < s2.length && m1 < s1.length) {
    if (s1[m1] === s2[m2]) m1++;
    m2++;
  }

  return m1 === s1.length ? true : false;
}

module.exports = isSubsequence;
