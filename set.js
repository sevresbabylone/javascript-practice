// A set is a data structure that represents an unordered collection of values, with no duplicates.
// This ES5Set class in JavaScript works by mapping any JavaScript value to a unique string,
// and then using that string as a property name.
// Objects and functions do not have a concise and reliably unique string representation,
// so the Set class must define an identifying property on any object or function stored in the set.

function ES5Set () {
  this.values = {}
  this.noOfValues = 0
  this.add.apply(this, arguments)
}
// class field
ES5Set.counter = 0

// Maps any JavaScript value to a unique string,
ES5Set._uniqueKey = function (value) {
  switch (value) {
    case undefined: return 'u'
    case null: return 'n'
    case true: return 't'
    case false: return 'f'
    default: switch (typeof value) {
      case 'number': return '#' + value
      case 'string': return '"' + value
      default: return '@' + objectId(value) // objects and functions get '@' prefix
    }
  }
}

// Add each of the arguments to the set.
ES5Set.prototype.add = function () {
  for (var i = 0; i < arguments.length; i++) {
    var key = ES5Set._uniqueKey(arguments[i])
    try {
      if (this.values.hasOwnProperty(key)) {
        throw new Error('Value already exists within set')
      } else {
        this.values[key] = arguments[i]
        this.noOfValues++
      }
    } catch (e) {
      console.log(e.message)
    }
  }
}

// Remove each of the arguments to the set.
ES5Set.prototype.remove = function () {
  for (var i = 0; i < arguments.length; i++) {
    var key = ES5Set._uniqueKey(arguments[i])
    if (this.values.hasOwnProperty(key)) {
      delete this.values[key]
      this.noOfValues--
    }
  }
  return this // for method chaining
}

// Calls function f on each member of the set
ES5Set.prototype.forEach = function (f, context) {
  for (var s in this.values) {
    if (this.values.hasOwnProperty(s)) { // ignore inherited properties
      f.call(context, this.values[s])
    }
  }
}

ES5Set.prototype.contains = function (value) {
  return this.values.hasOwnProperty(ES5Set._uniqueKey(value))
}

// Returns the size of the set
ES5Set.prototype.size = function () {
  return this.noOfValues
}
// For any object, return a string. This function will return a different
// string for different objects, and will always return the same string
// if called multiple times for the same object. To do this it creates a
// property on object. In ES5 the property would be nonenumerable and read-only.
function objectId (object) {
  var prop = '|**objectid**|'
  if (!object.hasOwnProperty(prop)) {
    object[prop] = ES5Set.counter++
    return object[prop]
  }
}

var throwawayFunction = function () {
  console.log('Hello World')
}
var throwawayFunction2 = function () {
  console.log('Hello World 2')
}
var displayValue = function (value) {
  console.log(value)
}
var newSet = new ES5Set(throwawayFunction, 3, 4, 5, 'Fat Corgis', throwawayFunction2)
console.log('The number of values in newSet is ' + newSet.size())
console.log('newSet contains Fat Corgis: ' + newSet.contains('Fat Corgis'))
newSet.forEach(displayValue)
console.log('newSet still contains Fat Corgis: ' + newSet.remove('Fat Corgis', throwawayFunction).contains('Fat Corgis'))
console.log('The new number of values in newSet is ' + newSet.size())
