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

async function startDb() {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.lbfz2uc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
            .then(() => console.log("Db Ok"))
    } catch (error) {
        console.log(error);
    }
}

startDb()




app.post('/register', async (req, res) => {

  
    const { first_name, last_name, age, phone, region, status, gender, course } = req.body
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
    const regisStudent = await students.save()
    res.json(regisStudent)
  


})


app.get('/students', async (req, res) => {
    try {
        const students = await User.find()

        res.json(students)

    } catch (error) {
        res.status(500).json({ message: "Malumotlarni olish iloji bulmadi" })
    }

})

app.delete('/students/:id', async (req, res) => {
    try {
        const studentId = req.params.id


        await User.findOneAndDelete({
            _id: studentId,
        })

        res.json({ message: "success" })
    } catch (error) {
        res.status(500).json({ message: "Malumotni o'chirishni iloji bo'lmadi" })
    }
})

app.get('/students/:id', async (req, res) => {
  try {
    const studentId = req.params.id;

   const studentsOne =  await User.findOne({
      _id: studentId,
    });

    res.json(studentsOne);
  } catch (error) {
    res.status(500).json({ message: "Malumotni olishni iloji bo'lmadi" });
  }
});


app.patch('/students/:id', async (req, res) => {
    try {
        const studentId = req.params.id
        const { first_name, last_name, age, phone, region, status, gender, course } = req.body
        console.log(studentId);

        await User.findOneAndUpdate({
            _id: studentId,
        },{
            first_name,
            last_name,
            age,
            phone,
            region,
            status,
            gender,
            course
        });

        res.json({ message: "success" })

    } catch (error) {
        res.status(500).json({ message: "Malumotni o'chirishni iloji bo'lmadi" })
    }
})








app.listen(PORT, () => {
    console.log(`server Started on port ${PORT}`);
})