const mongoose = require('mongoose');


mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.tzztp.mongodb.net/ab", {
      useNewUrlParser : true, 
      useUnifiedTopology : true ,
      useCreateIndex : true ,
      useFindAndModify: false,
    })
    .then(() => console.log('Connecté à MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));              

