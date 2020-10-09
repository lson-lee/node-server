module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const firstSchema = new Schema({
    _id: { type: Schema.ObjectId },
    name: { type: String },
    age: { type: Number },
  });
  return mongoose.model('FirstModel', firstSchema, 'first');
};
