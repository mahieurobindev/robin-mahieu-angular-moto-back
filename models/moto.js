var mongoose = require("mongoose");
const { DateTime } = require("luxon");

var formatDate = function () {
  return DateTime.fromJSDate(this.Datesortie).toISODate();
};

var motoSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  Marque: { type: String, required: true },
  Moto: { type: String, required: true },
  Datesortie: {
    type: Date,
    required: true,
    transform: (x) => DateTime.fromJSDate(x).toISODate(),
  },
});

motoSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

motoSchema.virtual("id").get(function () {
  return this._id;
});

motoSchema.virtual("fullname").get(function () {
  return this.Marque + " " + this.Modele;
});

// Export model.
module.exports = mongoose.model("motos", motoSchema);
