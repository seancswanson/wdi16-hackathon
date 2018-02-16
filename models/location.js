var mongoose = require('mongoose');
var locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: { // TODO: Need to add email validation
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  }
});
locationSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      name: ret.name,
      address: ret.address,
      lat: ret.lat,
      lng: ret.lng
    };
    return returnJson;
  }
});
var Location = mongoose.model('Location', locationSchema);
module.exports = Location;