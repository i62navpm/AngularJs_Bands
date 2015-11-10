(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('bar', {
        url: "/bar",
        templateProvider: function($templateCache){  
          return $templateCache.get('bar/bar.html'); 
        },
      });
  }
 
})();