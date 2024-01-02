// add whatever parameters you deem necessary
function constructNote(msg, ltrs) {
  const h1 = {};
  const h2 = {};
  for (let l of msg) h1[l] = h1[l] + 1 || 1;
  for (let l of ltrs) h2[l] = h2[l] + 1 || 1;
  for (let l in h1) {
    if (!h2[l] || h2[l] < h1[l]) return false;
  }

  return true;
}

module.exports = constructNote;
