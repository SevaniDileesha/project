const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let DeliverDetails = new Schema({
  recipient_name: {
    type: String
  },
  recipient_phone:{
    type: String
  },
  delivery_address:{
    type: String
  },
  delivery_city:{
    type: String
  },
  location_type:{
    type:String
  },
  delivery_date:{
    type: String
  }
},{
    collection: 'deliverdetails'
});

module.exports=mongoose.model('DeliverDetails', DeliverDetails);

