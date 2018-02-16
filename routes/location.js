require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Location = require('../models/location');
router.post('/add', function(req, res, next) {
  console.log('/location/add post route', req.body);
  // Find by email
  Location.findOne({ address: req.body.address }, function(err, location) {
    if (location) {
      return res.status(400).send({error: true, message: 'Bad Request - Location already exists' });
    }
    else {
      // create and save a user
      Location.create({
        name: req.body.name,
        address: req.body.address,
        lat: req.body.lat,
        lng: req.body.lng
      }, function(err, location) {
        if (err){
          console.log('DB error', err);
          res.status(500).send({error: true, message: 'Database Error - ' + err.message});
        }
        else {
          // TODO: figure out what this does
          res.send({location: location});
        }
      });
    }
  });
});
router.get('/show', function(req, res, next) {
  Location.find(function (err, locations) {
    if (err) return next(err);
    res.json(locations);
  });
});
module.exports = router;