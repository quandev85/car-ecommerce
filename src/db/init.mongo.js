const mongoose = require("mongoose");

const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.8965zd4.mongodb.net/?appName=Cluster0`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongo") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectionString)
      .then((_) => console.log("Connected MongoDb Success"))
      .catch((err) => console.log("Error Connect!"));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

module.exports = Database.getInstance();
