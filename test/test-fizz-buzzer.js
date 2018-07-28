const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzbuzzer');

describe('fizzBuzzer', function() {
	it('should return "fizz-buzz" for multiples of 15', function() {
    [15, 30, 45].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
});
	it('should return "buzz" for multipes of 5', function () {
	[5,10,20].forEach(function(input){
		expect(fizzBuzzer(input)).to.equal('buzz');
		});
	});
	it('should return "fizz" for multipes of 3', function () {
	[3,6,9].forEach(function(input){
		expect(fizzBuzzer(input)).to.equal('fizz');
		});
	});
	it('should return number if not multiple of 3 or 5', function() {
	[4,7,11,19].forEach(function(input){
		expect(fizzBuzzer(input)).to.equal(input);
		});
	});

	it('should raise error if input is not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a', '1', true, false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });

})
