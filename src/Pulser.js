// make a dancer than grows and shrink
var Pulser = function(top, left, timeBetweenSteps) {
  // use call to inherit dancer
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.big = true;
};

// set the prototype
Pulser.prototype = Object.create(makeDancer.prototype);
// set the constructor
Pulser.prototype.constructor = Pulser;

// add methods
// shrink method
Pulser.prototype.step = function(timeBetweenSteps) {
  // call the dancer's step function
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // use jquery css to change the size
  // check if its big or not
  if (this.big) {
    this.$node.css({
      'height': '10px',
      'width': '10px'
    });
    this.big = false;
  } else {
    this.$node.css({
      'height': '50px',
      'width': '50px' 
    });
    this.big = true;
  }

};

