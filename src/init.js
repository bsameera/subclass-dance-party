$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
  // create a new click event for lineup
  $('.lineUp').on('click', function(event) {
    // get the number of dancers
    var numOfDancers = dancers.length;
    // get the height and width of the screen
    var height = $("body").height();
    var width = $("body").width();
    var yPosition = height / 2;
    // calculate each new position
    // determine the position of the first dancer
    var xPosition = 50;
    // iterate through the dancers array, set the first dancer's position
    // for each other dancer increment its x position
    var increment = (width - 150)/(numOfDancers - 1);
    for (var i = 0; i < numOfDancers; i++) {
      // change their positions
      dancers[i].setPosition(yPosition, xPosition);
      xPosition = xPosition + increment;
    }
  });

  //create a mousehover event for Wiggle dancer
  $("body").on('mouseenter', '.wiggle', function (event) {
    //the dancer has to wiggle when mouse over
    var id = $(this).attr('id');
    var target;
    for (let dancer of dancers) {
      console.log(dancer.id);
      if (dancer.id === +id) {
        target = dancer;
      }
    }
    target.dontWait = true;
    // $('.wiggle').on('mouseover', function (event) {
    //   $('.wiggle').fadeToggle();})
  });
  
  //make the dancer stop wiggling when the mouse leaves


  
});


