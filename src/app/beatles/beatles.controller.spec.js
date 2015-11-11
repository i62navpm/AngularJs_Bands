'use strict';

describe('app', function() {
  beforeEach(function() {
    module('app');
  });

  describe('BeatlesController', function() {
    var $q,
      scope,
      vm,
      beatlesPrepServiceMock,
      deffered;

    function createMock() {
      deffered = $q.defer();
      return deffered.promise;
    }

    beforeEach(inject(function($controller, $rootScope, _$q_) {
      $q = _$q_;
      scope = $rootScope.$new();

      beatlesPrepServiceMock = {
        getBeatles: createMock()
      };

    vm = $controller('Beatles', {$scope: scope, beatlesPrepService: beatlesPrepServiceMock});
    }));

    it('carga inicial de campos de los datos del grupo', function() {
      var data = {video:1, texto:2, imagen:3};
      deffered.resolve(data);
      vm.datos.getBeatles.then(function(response){
        expect(response).toEqual(data);
      });
      scope.$digest();
    });

  });
});