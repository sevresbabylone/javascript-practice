// Simulate a Java style class in ES5, including instance methods, instance fields, class methods, class fields

function Complex (real, imaginary) {
// instance fields: per instance properties and values that hold the state of individual instances
  if (isNaN(real) || isNaN(imaginary)) {
    throw new TypeError()
  }
  this.r = real
  this.i = imaginary
}

// instance methods: methods shared by all instances of the class which are invoked on individual instances
Complex.prototype.add = function () {

}

Complex.prototype.subtract = function () {

}

Complex.prototype.multiply = function () {

}

Complex.prototype.divide = function () {

}

Complex.prototype.magnitude = function () {

}

Complex.prototype.equals = function () {

}

Complex.prototype.toString = function () {

}

// class fields:  properties or variables associated with the class rather than the instances of the class.
Complex.ZERO = new Complex(0, 0)
Complex.ONE = new Complex(1, 0)
Complex.I = new Complex(0, 1)

// class methods: methods that are associated with the class rather than with instances.
Complex.parse = function (string) {
}

// augmenting prototype
Complex.prototype.conjugate = function () {
  return new Complex(this.r, -this.i)
}
