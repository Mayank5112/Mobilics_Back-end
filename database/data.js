import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/Mobilicis', { useNewUrlParser: true })
    .then(() => console.log("connected to database "))
    .catch((err) => console.log("there was some issue \n" + err))


const uSchema = new mongoose.Schema({
    "id": Number,
    "first_name": String,
    "last_name": String,
    "email": String,
    "gender": String,
    "income": Number,
    "city": String,
    "car": String,
    "quote": String,
    "phone_price": Number
});


const Data = mongoose.model('data', uSchema);

export { Data }