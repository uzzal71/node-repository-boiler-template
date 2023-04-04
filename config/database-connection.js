const mongoose = require("mongoose");

const uri = `mongodb://localhost:27017/beeda-world`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectWithDb = async () => {
    const connectionResult = await mongoose.connect(uri, options);
    console.log(`Database connected`);
    return true;
};

module.exports = connectWithDb;
