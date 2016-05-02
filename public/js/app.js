/**
 * Author : Shoukath Mohammed
 * Date   : 05/01/2016
 * Time   : 08:00 PM EST
 * Created with eclipse
 */

var app = angular.module('myApp', ['ngAnimate', 'ui.router']);

/**
 * Directives declaration
 */
app.directive('addEvent', addEvent);
app.directive('addPrayer', addPrayer);
app.directive('editEvent', editEvent);
app.directive('editPrayer', editPrayer);
app.directive('panelDropdown', panelDropdown);
app.directive('addOrganization', addOrganization);
app.directive('addAnnouncement', addAnnouncement);
app.directive('editOrganization', editOrganization);
app.directive('editAnnouncement', editAnnouncement);
app.directive('manageOrganization', manageOrganization);


function addAnnouncement() {
    return {
        restrict: 'E',
        templateUrl: 'partials/announcements/add-announcement-panel.html'
    };
}

function editAnnouncement() {
    return {
        restrict: 'E',
        templateUrl: 'partials/announcements/edit-announcement-panel.html'
    };
}

function addEvent() {
    return {
        restrict: 'E',
        templateUrl: 'partials/events/add-event-panel.html'
    };
}

function editEvent() {
    return {
        restrict: 'E',
        templateUrl: 'partials/events/edit-event-panel.html'
    };
}

function addOrganization() {
    return {
        restrict: 'E',
        templateUrl: 'partials/organizations/add-organization-panel.html'
    };
}

function editOrganization() {
    return {
        restrict: 'E',
        templateUrl: 'partials/organizations/edit-organization-panel.html'
    };
}

function manageOrganization() {
    return {
        restrict: 'E',
        templateUrl: 'partials/organizations/manage-organization-panel.html'
    };
}

function addPrayer() {
    return {
        restrict: 'E',
        templateUrl: 'partials/prayers/add-prayer-panel.html'
    };
}

function editPrayer() {
    return {
        restrict: 'E',
        templateUrl: 'partials/prayers/edit-prayer-panel.html'
    };
}

function panelDropdown() {
    return {
        restrict: 'E',
        templateUrl: 'partials/panel-dropdown.html'
    };
}

/**
 * Configuration declaration
 */
app.config(httpProvider);
httpProvider.$inject = ['$httpProvider'];

function httpProvider($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
    $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = "GET, POST", "PUT", "DELETE", "OPTIONS";

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}