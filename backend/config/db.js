const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect( url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      
    });
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`ERROR--> ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://raviraj:<password>@onoxraviraj.ivnlw.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

