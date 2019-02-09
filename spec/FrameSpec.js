'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });
  
  describe('it counts the score', function(){
    it('each frame starts from zero score in a new game', function(){
      expect(frame.getCurrentScore()).toEqual(0);
    });

    it ('each frame starts with no rolls', function(){
      expect(frame.rolls).toEqual([]);
    });

    it('counts pins knocked down in roll(s) within a frame', function(){
      frame.knockedDown(5);
      frame.knockedDown(5);
      expect(frame.rolls).toEqual([5,5]);
    });

    it('adds score pins are knocked down within a frame', function() {
      frame.knockedDown(5);
      expect(frame.getCurrentScore()).toEqual(5);
    });
  });

});