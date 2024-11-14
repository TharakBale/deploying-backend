const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  author: { type: String, required: true },
  reviewContent: { type: String, required: true },
  reviewerName: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
