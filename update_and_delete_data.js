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

// Fruit.updateOne(
//   { _id: "5ed4b23f199c010b22e1aa9b" },
//   { name: "Nanas" },
//   (error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("berhasil update nama buah");
//     }
//   }
// );
Fruit.deleteOne({ _id: "5ed4b23f199c010b22e1aa9b" }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("berhasil update nama buah");
  }
});

Fruit.find((error, fruits) => {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    fruits.map((fruit) => {
      console.log(fruit.name);
    });
  }
});
