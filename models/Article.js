var mongoose = require("mongoose");

var Article = mongoose.model("Article", {
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});
