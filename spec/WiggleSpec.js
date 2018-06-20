describe('WiggleDancer', function() {

  var WiggleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    WiggleDancer = new Pulser(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(WiggleDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(RotaterDancer, 'step');
      expect(WiggleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(WiggleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(WiggleDancer.step.callCount).to.be.equal(2);
    });
  });
});