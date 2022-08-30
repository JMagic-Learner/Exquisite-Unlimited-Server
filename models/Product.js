const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  pictureID:{
    type: Number,
    required:true,
    trim:true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
   description: {
    type: String,
    trim: true,
  },
   price: {
    type: Number,
    required: true,
    trim: true,
  },
  serial : { 
    type : Array , 
    "default" : [] 
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
  size: {
    type: String,
    required: true,
  }
});

const Product = model('Product', productSchema);

module.exports = Product;