const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://muskankewlanicimet:Vgj0O4kXtR5y84wn@cluster0.ebuz8.mongodb.net/Weather"

const ConnectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {  
        console.error("Error connecting to MongoDB:", error);
    }
};


module.exports = ConnectToMongo;



