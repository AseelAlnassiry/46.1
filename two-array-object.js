// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
  const h = {};
  for (let i = 0; i < keys.length; i++) {
    if (vals[i]) h[keys[i]] = vals[i];
    else h[keys[i]] = null;
  }

  return h
}

module.exports = twoArrayObject;
