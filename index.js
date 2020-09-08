var recipe = {eggs: 3, flour: '1 cup', chocolate: '2 cups'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
