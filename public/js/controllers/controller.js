angular
    .module('myApp')
    .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['$scope', '$http', '$log', '$stateParams', '$state', 'utilService'];

function AppCtrl($scope, $http, $log, $stateParams, $state, utilService) {

    var that = this;

    $scope.item = {
        events: [],
        prayer: [],
        announcements: []
    };

    $scope.eventObj = {};
    $scope.prayerObj = {};
    $scope.announcementObj = {};

    $scope.viewJSON = false;
    $scope.isEditTab = true;
    $scope.isUpdateTab = false;
    $scope.defaultDropdown = "default";

    //$scope.names = ["test", "test1", "test2", "test3", "test4"];

    $scope.isActive = {
        tab1: false,
        tab2: false,
        tab3: false,
        tab4: false,
        tab5: false
    };

    $scope.toggle = function(currentTab) {
        $scope.isActive['tab' + currentTab ] = !$scope.isActive['tab' + currentTab];
    };

    $scope.refresh = function() {
        $http.get('/contactlist').success(function(response) {
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    $scope.refresh();

    $scope.addContact = function(rec) {
        $scope.contact = rec;
        if ( !_.isEmpty(rec) ) {
            $http.post('/contactlist', $scope.contact).success(function(response) {
                $scope.refresh();
                utilService.showAlert('success','Record successfully added.');
            });
        } else {
            utilService.showAlert('danger', 'Fields cannot be empty.');
        }
    };

    $scope.remove = function(id) {
        $http['delete']('/contactlist/' + id).success(function(response) {
            $scope.refresh();
            utilService.showAlert('success','Record successfully deleted.');
        });
    };

    $scope.edit = function(id) {
        var url = (id.length > 4) ? ('/contactlist/' + id) : ('/contactlist/prayer/' + id);
        $http.get(url).success(function(response) {
            if (response) {
                $scope.contact = response;
                $scope.setActiveTab("UPDATE");
            }
        });
    };

    $scope.updateRecords = function() {
        if ( !_.isEmpty($scope.contact) ) {
            $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
                $scope.refresh();
                utilService.showAlert('success', 'Successfully Updated.');
                $scope.setActiveTab("EDIT");
            });
            $scope.refreshTabs($scope.isActive);
        } else {
            utilService.showAlert('danger', 'Fields cannot be empty.');
        }
    };

    $scope.deselect = function() {
        $scope.setActiveTab("EDIT");
    };

    $scope.refreshTabs = function(obj) {
        for (var tab in obj) {
            if (obj.tab) {
                obj.tab = false;
            }
        }
    };

    $scope.setActiveTab = function(activeTab) {
        if (activeTab == "EDIT") {
            $scope.isEditTab = true;
            $scope.isUpdateTab = false;
        } else {
            $scope.isEditTab = false;
            $scope.isUpdateTab = true;
        }
    };

    $scope.clear = function(obj) {
        for (var key in obj){
            if (obj.hasOwnProperty(key)){
                delete obj[key];
            }
        }
    };

    $scope.add =  function(itemType) {
        var _id = Math.floor(1000 + Math.random() * 9000);
        var _date = new Date();

        if( !_.isEmpty($scope.prayerObj) || !_.isEmpty($scope.eventObj) || !_.isEmpty($scope.announcementObj) ) {
            if ( itemType == "PRAYER_TIME" ) {
                $scope.prayerObj.id = _id;
                $scope.prayerObj.lastUpdated = _date.toJSON();
                $scope.item.prayer.push($scope.prayerObj);
                $scope.prayerObj = {};
            } else if( itemType == "EVENT" ) {
                $scope.eventObj.id = _id;
                $scope.eventObj.lastUpdated = _date.toJSON();
                $scope.item.events.push($scope.eventObj);
                $scope.eventObj = {};
            } else if( itemType == "ANNOUNCEMENT" ) {
                $scope.announcementObj.id = _id;
                $scope.announcementObj.lastUpdated = _date.toJSON();
                $scope.item.announcements.push($scope.announcementObj);
                $scope.announcementObj = {};
            }
            $scope.item.dateCreated = _date.toJSON();
        }
    };

    $scope.reset =  function(itemType) {
        if( itemType == "ALL" ) {
            $scope.item = {};
            $scope.item.prayer = [];
            $scope.item.events = [];
            $scope.item.announcements = [];
        }

        if(itemType == "PRAYER_TIME") {
            $scope.item.prayer = [];
        }

        if( itemType == "EVENT" ) {
            $scope.item.events = [];
        }

        if( itemType == "ANNOUNCEMENT" ) {
            $scope.item.announcements = [];
        }
    };
}
