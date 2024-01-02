// add whatever parameters you deem necessary
function sameFrequency(n1, n2) {
  const s1 = n1.toString();
  const s2 = n2.toString();
  if (s1.length != s2.length) return false;
  const h1 = {};
  const h2 = {};
  for (let n of s1) h1[n] = h1[n] + 1 || 1;
  for (let n of s2) h2[n] = h2[n] + 1 || 1;
  for (let n in h1) {
    if (h1[n] !== h2[n]) return false;
  }

  return true;
}

module.exports = sameFrequency;
