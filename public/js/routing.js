/**
 * author : Shoukath Mohammed
 * date   : 12/07/2015
 * time   : 11:15 am est
 * created with eclipse
 */

(function() {
    angular
    .module('myApp')
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");
        $stateProvider
        .state('/', {
            url : "/",
            templateUrl : "partials/home.html",
            controller: function($rootScope) {
                $rootScope.viewClass = 'dashboard-view';
            }
        })
        .state('azaan', {
            url : "/azaan-timings",
            templateUrl : "partials/azaan-timings.html",
            controller: function($rootScope) {
                $rootScope.viewClass = 'azaan-timings-view';
            }
        })
        .state('edit', {
            url : "/edit-timings",
            templateUrl : "partials/edit-timings.html",
            controller: function($rootScope) {
                $rootScope.viewClass = 'edit-timings-view';
            }
        })
        .state('update', {
            url : "/update-timings",
            templateUrl : "partials/update-timings.html",
            controller: function($rootScope) {
                $rootScope.viewClass = 'update-timings-view';
            }
        });
    });
})();