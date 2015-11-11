(function() {
  'use strict';

  angular
    .module('app')
    .filter('videoSanitize', videoSanitize);

  function videoSanitize($sce) {
    return function(obj){
      obj.video = $sce.trustAsHtml(obj.video);
      return obj;
    };
  }

})();