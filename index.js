var recipe = {eggs: 3, flour: '1 cup', chocolate: '2 cups'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)

  delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key
}