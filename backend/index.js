import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import User from './module/User.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

app.use(cors())
app.use(express.json())

async function startDb(){
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.lbfz2uc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
        .then(() => console.log("Db Ok"))
    } catch (error) {
            console.log(error);
    }
}

startDb()

app.post('/register', async (req, res) =>{


    try {
        const {first_name,last_name, age,phone, region , status,  gender, course} = req.body

        const students = new User({
            first_name,
            last_name,
            age,
            phone,
            region,
            status,
            gender,
            course
        })

        await students.save()
        res.json({students,message:"Malumotlar qo'shish muaffaqiyatli amalga oshirildi"})
    } catch (error) {
        res.json({message:"Malumotlarni qo'shishda xatolik yuz berdi!"})
    }

 
})


app.get('/students', async (req, res) => {
        try {
            const students = await User.find()

            res.json(students)

        } catch (error) {
            res.status(500).json({message:"Malumotlarni olish iloji bulmadi"})
        }
     
})








app.listen(PORT, () =>{
    console.log(`server Started on port ${PORT}`);
})