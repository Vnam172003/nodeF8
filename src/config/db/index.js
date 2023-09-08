const mongoose = require('mongoose')


async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/F8_Namhoclaptrinh_dev', {
            useNewUrlParser: true,
            UseUnifiedTopology: true
        })
        console.log("coon connection")
    } catch (error) {
        console.log("failed to connect")
    }
}
module.exports = { connect }