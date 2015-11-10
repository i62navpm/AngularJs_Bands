(function() {
  'use strict';

  angular
    .module('app')
    .factory('ejercicioService', ejercicioService);

  function ejercicioService($http) {
    return {
      getRollingStones: getRollingStones,
      getBeatles: getBeatles,
      getQueen: getQueen
    };

    function getRollingStones() {
      return $http.get('http://127.0.0.1:8882/api/rollingStones');
    }
    
    function getBeatles() {
      return $http.get('http://127.0.0.1:8882/api/beatles');
    }
    
    function getQueen() {
      return $http.get('http://127.0.0.1:8882/api/queen');
    }
   
  }

})();