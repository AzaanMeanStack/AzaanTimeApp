/**
 *
 */



//handles 'PUT' requests, updates a record
/*app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  var now =  new Date();
  db.contactlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {salah: req.body.salah, iqama: req.body.iqama, lastUpdated: now.toJSON() }}}, function (err, doc) {
      res.json(doc);
    }
  );
  console.log(req.body);
});*/

/*app.put('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    var now =  new Date();
    db.contactlist.update({
        prayer: { $elemMatch: { id: req.body.id } }
    }, {
        $set: {
            'prayer.$.salah': req.body.salah,
            'prayer.$.iqama': req.body.iqama,
            'prayer.$.lastUpdated': now.toJSON() }
    });
});*/

    /*$scope.addContact = function(rec) {
        $scope.contact = rec;
        if ( !_.isEmpty(rec) ) {
            $http.post('/contactlist', $scope.contact).success(function(response) {
                $scope.refresh();
                utilService.showAlert('success','Record successfully added.');
            });
        } else {
            utilService.showAlert('danger', 'Fields cannot be empty.');
        }
    };*/

/*$scope.remove = function(id) {
        $http['delete']('/contactlist/' + id).success(function(response) {
            $scope.refresh();
            utilService.showAlert('success','Record successfully deleted.');
        });
    };*/

/*<!-- <div class="col-sm-4 pull-right select-prayer-hall">
  <div class="input-group">
    <span class="input-group-addon">Select Masjid:</span>
    <select class="form-control" name="OrderBy" ng-model="name">
      <option class="default-option" value="{{defaultDropdown}}" selected>Nothing Selected</option>
      <option class="masjid-option" ng-repeat="name in names" value="{{name}}">{{name}}</option>
    </select>
  </div>
</div> -->  */
