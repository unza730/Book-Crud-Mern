const mongoose = require("mongoose");
const DB = async () => {
    try {
     const conn = await mongoose.connect(
       "mongodb+srv://unza:unza@cluster0.awobg.mongodb.net/bookstore?retryWrites=true&w=majority"
     );
        console.log("Connection Succesfully!");
    } catch (err) {
        console.log("No Connection");
    }
}
module.exports = DB;
