const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "not be empty"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: {
    type: String,
    required: [true, "review field can't be empty"],
  },
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const durian = new Fruit({
  name: "Durian",
  rating: 10,
  review: "ok durian montong",
});

durian.save((error) => {
  if (error) {
    mongoose.connection.close();
    console.log(error.message);
  } else {
    mongoose.connection.close();
    console.log("berhasil input");
  }
});
