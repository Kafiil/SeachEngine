const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  type: String,
  tags: [String],
  createdAt: Date
});

module.exports = mongoose.model("new", newsSchema);
