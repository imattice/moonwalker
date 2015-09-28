var moonwalker = angular.module('moonwalker', ['ui.router']);


moonwalker.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: "",
        views: {
            'header': {
                templateUrl: 'partials/header.html',
                controller: 'HeaderCtrl'
            },
            'body': {
                templateUrl: 'partials/home.html',
            },
        }
    });


});
