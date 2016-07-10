'use strict';

var isString = require('../index')
var expect   = require('chai').expect

describe('is-string: checks if the argument is a string', function () {
  it('is a function', function() {
    expect(isString).to.be.a('function')
  })
  it('returns false if called with no arguments', function() {
    expect(isString()).to.equal(false)
  })
  it('retruns true for string literals', function() {
    expect(isString('')).to.equal(true)
    expect(isString(' ')).to.equal(true)
    expect(isString('abc')).to.equal(true)
    expect(isString('ABC')).to.equal(true)
  })
  it('retruns true for String objects', function() {
    expect(isString(new String())).to.equal(true)
    expect(isString(new String('abc'))).to.equal(true)
  })
  it('retruns true for multi-word strings', function() {
    expect(isString('hi there')).to.equal(true)
    expect(isString(new String('how are you?'))).to.equal(true)
  })
  it('retruns false for undefined, null, and false', function() {
    expect(isString(undefined)).to.equal(false)
    expect(isString(null)).to.equal(false)
    expect(isString(false)).to.equal(false)
  })
  it('retruns false for Numbers, Objects, Arrays and Functions', function() {
    expect(isString(457891)).to.equal(false)
    expect(isString(function() {return 'hi';})).to.equal(false)
    expect(isString(['1', '2'])).to.equal(false)
    expect(isString({ a:'x', b:5 })).to.equal(false)
  })
  it('Doesn\'t modify the actual argument', function() {
    var a = 457891
    var b = a
    isString(a)
    expect(a).to.equal(b)

    a = function() {return 'hi';}
    b = a
    isString(a)

    a = ['1','2']
    b = a
    isString(a)
    expect(a).to.equal(b)

    a = { a:'x', b:2 }
    b = a
    isString(a)
    expect(a).to.equal(b)

    a = new String()
    b = a
    isString(a)
    expect(a).to.equal(b)

    a = new String('abc')
    b = a
    isString(a)
    expect(a).to.equal(b)
    expect(a.valueOf()).to.equal('abc')
  })
})
