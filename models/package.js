const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a package
const PackageSchema = new Schema({
  trackingId: {
    type: String,
    required: true,
    unique: true
  },
  packageName: {
    type: String,
    required: true,
  },
  pickup: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  currentLocation: {
    type: String,
    required: true
  },
  checkpoints: [{
    type: String,
  }],
  packageDescription: {
    type: String,
    required: true
  },
  packageStatus: {
    type: String,
    default: 'in transit'
  },
  dateOfDeparture: {
    type: Date,
    required: true
  },
  dateOfArrival: {
    type: Date,
    required: true
  }
}, {
  timestamps: true // automatically add createdAt and updatedAt fields
});

// Create the model from the schema
const Package = mongoose.model('Package', PackageSchema);

module.exports = Package;
