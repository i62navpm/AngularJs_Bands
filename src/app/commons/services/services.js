(function() {
  'use strict';

  angular
    .module('app')
    .factory('ejercicioService', ejercicioService);

  function ejercicioService($http, $filter) {
    return {
      getRollingStones: getRollingStones,
      getBeatles: getBeatles,
      getQueen: getQueen
    };

    function getRollingStones() {
      return $http.get('http://127.0.0.1:8882/api/rollingStones').then(function(response){
        return $filter('videoSanitize')(response.data);
      });
    }
    
    function getBeatles() {
      return $http.get('http://127.0.0.1:8882/api/beatles').then(function(response){
        return $filter('videoSanitize')(response.data);
      });
    }
    
    function getQueen() {
      return $http.get('http://127.0.0.1:8882/api/queen').then(function(response){
        return $filter('videoSanitize')(response.data);
      });
    }
   
  }

})();