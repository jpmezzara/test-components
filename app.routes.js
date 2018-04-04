(function () {
    'use-strict';

    var app = angular.module('app');

    app.config(function ($stateProvider) {
        var helloState = {
            name: 'hello',
            url: '/hello',
            template: '<h3>hello world!</h3>'
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        };

        var unidades = {
            name: 'unidades',
            url: '/unidades',
            template: '<unidades></unidades>'
        };

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
        $stateProvider.state(unidades);
    });
}());