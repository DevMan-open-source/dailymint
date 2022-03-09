const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'Please provide News type!'],
    enum: {
      values: [
        'India News',
        'Geopolitical News',
        'Entertainment News',
        'Political News',
        'Cricket News',
      ],
      message:
        'Sorry! News type could be either Indian or Entertainment or Political or Geopolitical or Cricket News.',
    },
  },

  abstract: {
    type: String,
  },

  photos: [String],
  timeStamp: {
    type: Object,
    published_at: {
      type: Date,
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
  },
});

module.exports = mongoose.model('News', newsSchema);
