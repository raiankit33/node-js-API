const mongoose = require('mongoose');
 // mongodb+srv://ankit:mongodb@cluster0.1m7jn.mongodb.net/test
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`Mongo DB Connected: ${process.env.MONGO_URI}`);
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;

