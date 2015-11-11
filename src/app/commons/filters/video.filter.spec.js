'use strict';

describe("App", function() {
  beforeEach(function () {
    module('app');
  });
  
  describe('videoSanitize', function () {
    it('Debe de cambiar el valor de string a objeto', inject(function($filter) {
      var obj = {texto: '', imagen:'', video:"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ZNaqBBjrIZw\" frameborder=\"0\" allowfullscreen></iframe>"};
      expect(typeof obj.video === 'string').toBeTruthy();
      $filter('videoSanitize')(obj);
      expect(obj.video instanceof Object).toBeTruthy();

    }));
  });

});
