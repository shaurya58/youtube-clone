const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  subscribers: {
    type: Number,
    default: 0,
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
  ],
});

module.exports = mongoose.model('Channel', channelSchema);
