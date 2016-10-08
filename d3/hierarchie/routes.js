/**
 * Created by guoxc on 2016/10/8.
 */
angular.module('hierarchie', [
    'ngRoute',
    'hierarchie.controllers',
    'hierarchie.filters',
    'hierarchie.services',
    'hierarchie.directives'
]);
angular.module('hierarchie')
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/', {
                    templateUrl: 'data/charts.html',
                    controller: 'MainCtrl'
                })
                .when('/fcc', {
                    templateUrl: 'data/fcc.html',
                    controller: 'FccCtrl'
                })
                .when('/about', {
                    templateUrl: 'data/about.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);