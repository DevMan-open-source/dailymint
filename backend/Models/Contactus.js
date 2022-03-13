const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phonenumber: {
    type: Number,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
});

const Contact = mongoose.model("Contact", ContactUsSchema);

module.exports = Contact;
