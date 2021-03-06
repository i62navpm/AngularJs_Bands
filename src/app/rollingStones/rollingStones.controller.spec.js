'use strict';

describe('app', function() {
  beforeEach(function() {
    module('app');
  });

  describe('RollingStonesController', function() {
    var $q,
      scope,
      vm,
      rollingStonesPrepServiceMock,
      deffered;

    function createMock() {
      deffered = $q.defer();
      return deffered.promise;
    }

    beforeEach(inject(function($controller, $rootScope, _$q_) {
      $q = _$q_;
      scope = $rootScope.$new();

      rollingStonesPrepServiceMock = {
        getRollingStones: createMock()
      };

    vm = $controller('RollingStones', {$scope: scope, rollingStonesPrepService: rollingStonesPrepServiceMock});
    }));

    it('carga inicial de campos de los datos del grupo', function() {
      var data = {video:1, texto:2, imagen:3};
      deffered.resolve(data);
      vm.datos.getRollingStones.then(function(response){
        expect(response).toEqual(data);
      });
      scope.$digest();
    });

  });
});