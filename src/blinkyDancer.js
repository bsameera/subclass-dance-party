// refactor this function to be psuedoclassical
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // use call to add inheritance
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // add this to the prototype
  var oldStep = blinkyDancer.step;

  // add this to the prototype
  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  // return blinkyDancer;
};