var count = 0;
// create the class
var Wiggle = function(top, left, timeBetweenSteps) {
  // call the parent dancer for inheritance
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.up = true;
  this.dontWait = false;
  this.$node.addClass('wiggle');
  count++;
  this.id = count;
  this.$node.attr('id', count);
}

// set the prototype
Wiggle.prototype = Object.create(makeDancer.prototype);
// set the constructor
Wiggle.prototype.constructor = Wiggle;

// override the step method
Wiggle.prototype.step = function(timeBetweenSteps) {
  // call the original step function
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // make it move forward and backwards, using jquery animate
  // find its current position
  if (this.dontWait) {
    var position = this.$node.position();
    var increment = 50;
    if (this.up) {
      var yPosition = position.top + increment;
      this.$node.animate({
        // change the y position
        'top': '' + yPosition
      });
      this.up = false;
    } else {
      var yPosition = position.top - increment;
      this.$node.animate({
        'top': '' + yPosition
      });
      this.up = true;
    }
  }

};
