const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit({
//   name: "Apple",
//   rating: 10,
//   review: "manis banget",
// });

// apple.save(function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("berhasil save apple");
//   }
// });

const jeruk = new Fruit({
  name: "Jeruk",
  rating: 5,
  review: "asem",
});
const mangga = new Fruit({
  name: "Mangga",
  rating: 7,
  review: "Murah manis",
});
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 9,
  review: "Discont dan manis",
});

Fruit.insertMany([jeruk, mangga, kiwi], (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("data buah berhasil di input");
  }
});
