import express from 'express'
import connectDB from './db/index'
import app from './app.js'
dotenv.config({
    path: './.env'
})

connectDB() // async request hai tu promise jaroor return karega is liye then use kr rhe hai
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is listening on {process.env.PORT}`);
        app.on('error', () => {
            console.error('Server is not running')
        })
    })
})
.catch((error)=> {
    console.log('MongoDB connection failed : ' + error)
})



