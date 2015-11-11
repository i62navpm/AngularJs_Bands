'use strict';

describe('app', function() {
  beforeEach(function() {
    module('app');
  });

  describe('QueenController', function() {
    var $q,
      scope,
      vm,
      queenPrepServiceMock,
      deffered;

    function createMock() {
      deffered = $q.defer();
      return deffered.promise;
    }

    beforeEach(inject(function($controller, $rootScope, _$q_) {
      $q = _$q_;
      scope = $rootScope.$new();

      queenPrepServiceMock = {
        getQueen: createMock()
      };

    vm = $controller('Queen', {$scope: scope, queenPrepService: queenPrepServiceMock});
    }));

    it('carga inicial de campos de los datos del grupo', function() {
      var data = {video:1, texto:2, imagen:3};
      deffered.resolve(data);
      vm.datos.getQueen.then(function(response){
        expect(response).toEqual(data);
      });
      scope.$digest();
    });

  });
});