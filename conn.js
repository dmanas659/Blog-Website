const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://blogDB:blogDB@cluster0.0ffcr.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("connected to DB."))
    .catch(err => console.log(err));