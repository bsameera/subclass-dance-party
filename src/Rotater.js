//create a dancer class that rotates
var Rotater = function(top, left, timeBetweenSteps) {
  //inherit from the dancer class
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.rotation = 0;
};

//create a prototype chain 
Rotater.prototype = Object.create(makeDancer.prototype);

//set the constructor
Rotater.prototype.constructor = Rotater;

//override the step function, 
//use css transform to rotate the dancer
Rotater.prototype.step = function(timeBetweenSteps) {
  // call the dancer's step function
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.css({
    'transform': 'rotate(' + this.rotation + 'deg)',
    'height': '20px',
    'width': '20px'});
  this.rotation = this.rotation + 30;
};
