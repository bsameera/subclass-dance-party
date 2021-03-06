describe('RotaterDancer', function() {

  var RotaterDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    RotaterDancer = new Pulser(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(RotaterDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(RotaterDancer, 'step');
      expect(RotaterDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(RotaterDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(RotaterDancer.step.callCount).to.be.equal(2);
    });
  });
});