var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name:{type:String, required:true, maxLength: 100}
  }
);

// Virtual for genreschema's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('GenreSchema', GenreSchema);