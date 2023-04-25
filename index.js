import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// database
import { Data } from "./database/data.js";
import everything from "./sample_data.json" assert {type: "json"};
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

// everything.forEach(element => {
//     const newUser = new Data({
//         "id": element.id,
//         "first_name": element.first_name,
//         "last_name": element.last_name,
//         "email": element.email,
//         "gender": element.gender,
//         "income": (+element.income.slice(1)),
//         "city": element.city,
//         "car": element.car,
//         "quote": element.quote,
//         "phone_price": (+element.phone_price)
//     })
//     newUser.save()
// });

app.get("/all", async (req, res) => {
    const data = await Data.find({}).sort({ id: 1 });
    res.send(data)
})
app.get("/findIncomeAndCar", async (req, res) => {
    const data = await Data.find({ income: { $lt: 5 }, car: { $in: ["BMW", "Mercedes"] } }).sort({ id: 1 })
    res.send(data)
})
app.get("/findPhonePrice", async (req, res) => {
    const data = await Data.find({ gender: "Male", phone_price: { $gt: 10000 } }).sort({ id: 1 })
    res.send(data)
})
app.get("/findLastName", async (req, res) => {
    const initialData = await Data.find({ last_name: /^M/, quote: { $gt: 15 } }).sort({ id: 1 })
    const data = initialData.filter(checkEmail)
    function checkEmail(obj) {
        return obj.email.toLowerCase().includes(obj.last_name.toLowerCase())
    }
    res.send(data)
})
app.get("/findCarBrand", async (req, res) => {
    const data = await Data.find({ car: { $in: ["BMW", "Mercedes", "Audi"] }, email: { $not: /\d/ } }).sort({ id: 1 })
    res.send(data)
})
app.get("/findCities", async (req, res) => {
    const data = await Data.aggregate([
        { $group: { _id: "$city", count: { $sum: 1 }, avg_income: { $avg: "$income" } } },
        { $sort: { count: -1 } },
        { $limit: 10 }])
    res.send(data)
})
app.listen(port, () => { console.log(`http://localhost:${port}`); }) 