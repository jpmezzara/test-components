(function () {
    'use-strict';

    var module = angular.module('app');

    module.component('unidades', {
        templateUrl: 'components/unidades/unidades.html',
        controllerAs: 'uCtrl',
        controller: ['unidadesService', controller]
    });

    function controller(unidadesService) {
        var vm = this;

        vm.unidades = unidadesService.getUnidadesActivas();
    }
}());