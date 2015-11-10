(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('foo', {
        url: "/foo",
        templateProvider: function($templateCache){  
          return $templateCache.get('foo/foo.html'); 
        },
      });
  }
 
})();