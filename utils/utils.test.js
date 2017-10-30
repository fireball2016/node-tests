const expect = require('expect');
const utils = require('./utils.js');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44 but got ${res}.`)
  // }
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  })
});

it('should square a number', () => {
  var res = utils.squre(3);

  expect(res).toBe(9).toBeA('number');
  // if (res !== 9) {
  //   throw new Error(`Expected 9 but got ${res}.`)
  // }
});

it('should async square a number', (done) => {
  utils.asyncSquare(3, (res) => {
    expect(res).toBe(9).toBeA('number');
    done();
  })
});

it('should set first and last names are set', () => {
  var user = {
    location: 'Seattle',
    age: 24
  }

  var res = utils.setName(user, 'Jake Ni');

  expect(res).toInclude({
    firstName: 'Jake',
    lastName: 'Ni'
  });
});
