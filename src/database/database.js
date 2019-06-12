const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://apinode:apinode@cluster0-ybbpo.mongodb.net/nodeapi', {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;