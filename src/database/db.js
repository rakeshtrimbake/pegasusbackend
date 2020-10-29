const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/pegasus",{useNewUrlParser:true,useUnifiedTopology:true},
() => {
    console.log(`Database Connected Succefully`);
});