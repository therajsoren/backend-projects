import express from "express";
import cors from 'cors';


const app = express();
const PORT = 3000

// middleware for handling JSON, URL - encoded data , and serving static files
app.use(express.json()) // Middleware to parse the request body as JSON
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cors());


app.set('view engine', 'ejs');

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`App running on port ${PORT}`)
})
