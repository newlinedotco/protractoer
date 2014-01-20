'use strict';

describe('Service: Github', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var Github;
  beforeEach(inject(function (_Github_) {
    Github = _Github_;
  }));

  it('should do something', function () {
    expect(!!Github).toBe(true);
  });

});
