/**
 * MEAN STACK Restful API
 */

//DB configuration
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// handles 'GET' requests, fetch all contacts in the list
app.get('/contactlist', function (req, res) {
  db.contactlist.find(function (err, docs) {
    res.json(docs);
  });
});

//handles 'POST' requests
app.post('/contactlist', function (req, res) {
  db.contactlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
  console.log(req.body);
});

//handles 'DELETE' requests
app['delete']('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

//handles 'GET' requests, fetch a specific record
app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.params);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

/*app.get('/contactlist/prayer/:id', function (req, res) {
    var __id = req.params.id;
    console.log(__id);
    db.contactlist.find({ prayer: { $elemMatch: { id: __id[1] }} }, function (err, doc) {
      res.json(doc);
      console.log(doc);
    });
  });*/

//handles 'PUT' requests, updates a record
app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  var now =  new Date();
  db.contactlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {salah: req.body.salah, iqama: req.body.iqama, lastUpdated: now.toJSON() }}}, function (err, doc) {
      res.json(doc);
    }
  );
  console.log(req.body);
});

app.listen(port);
console.log("Server running on port 3000");