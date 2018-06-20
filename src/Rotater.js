//create a dancer class that rotates
var Rotater = function(top, left, timeBetweenSteps) {
  //inherit from the dancer class
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.rotation = 0;
  $('<img class="rotater" src="media/michael.jpeg">').appendTo(this.$node);
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
    'height': '0px',
    'width': '0px',
    'border': '0px',
    'border-radius': '0px'});
  this.rotation = this.rotation + 30;
};
