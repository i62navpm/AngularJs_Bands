(function() {
  'use strict';
  angular
    .module('app')
    .controller('Beatles', Beatles);

  function Beatles(beatlesPrepService) {
    var vm = this;
    
    vm.datos = beatlesPrepService;

    window.document.title = "The Beatles";
    var element = angular.element(document.querySelector('meta[name="description"]'));
    element[0].content = "The Beatles fue una banda de rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular.1 2 3 4 5 6 Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años cincuenta, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. ";
    element = angular.element(document.querySelector('meta[name="keywords"]'));
    element[0].content = "rock exitosa Liverpool";
  }

})();