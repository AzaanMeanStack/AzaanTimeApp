/**
 * Author : Shoukath Mohammed
 * Date   : 05/01/2016
 * Time   : 08:00 PM EST
 * Created with eclipse
 */

(function() {
    angular
    .module('myApp')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        $stateProvider
        .state('/', {
            url : "/",
            templateUrl : "partials/views/dashboard-view.html",
            controller: function($rootScope) {
                $rootScope.viewClass = 'dashboard-view';
            }
        })
        .state('azaan', {
            url : "/azaan-timings",
            templateUrl : "partials/views/azaan-timings-view.html",
            controller: function($rootScope) {
                $rootScope.viewClass = 'azaan-timings-view';
            }
        })
        .state('edit', {
            url : "/edit-timings",
            templateUrl : "partials/views/panels-view.html",
            controller: function($rootScope) {
                $rootScope.viewClass = 'edit-timings-view';
            }
        });
    });
})();