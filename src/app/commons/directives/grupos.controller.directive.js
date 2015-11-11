(function() {
  'use strict';

  angular
    .module('app')
    .controller('Grupo', Grupo);

  function Grupo() {
    var vm = this;

    window.document.title = vm.datos.titulo;
    var element = angular.element(document.querySelector('meta[name="description"]'));
    element[0].content = vm.datos.descripcion;
    element = angular.element(document.querySelector('meta[name="keywords"]'));
    element[0].content = vm.datos.keywords;

    element = angular.element(document.querySelector('meta[property="og:title"]'));
    element[0].content = vm.datos.titulo;
    element = angular.element(document.querySelector('meta[property="og:type"]'));
    element[0].content = "video.movie";
    element = angular.element(document.querySelector('meta[property="og:url"]'));
    element[0].content = vm.datos.videoUrl;
    element = angular.element(document.querySelector('meta[property="og:image"]'));
    element[0].content = vm.datos.imagen;
  }

})();