import express from 'express'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

const treeSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    information: { type: String, required: true }
}, { timestamps: true })



app.use(cors())
app.use(express.json())


const Trees = mongoose.model('trees', treeSchema);


//Get All Users

app.get('/trees', async (req, res) => {
    try {
        const tree = await Trees.find({})
        res.send(tree)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})




//Get by Id

app.get('/trees/:id', async (req, res) => {
    try {
        const trees = await Trees.findById(req.params.id)
        res.send(trees)
    } catch (error) {
        res.status(500).json({ message: error })
    }



})



//Add user

app.post('/trees', async(req, res) => {
    try {
        const tree = new Trees({
            image: req.body.image,
            title: req.body.title,
            information: req.body.information
        })
        await tree.save()
        res.send(tree)
    } catch (error) {
        res.status(500).json({ message: error })

    }
    // res.send({ message: "Trees created" })
})


//Delete User
app.delete('/trees/:id', async (req, res) => {
    try {
        const trees = await Trees.findByIdAndDelete(req.params.id)
        res.status(500).json({ message: "Trees Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }

})


const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
    .then(() => console.log("Connected db"))
    .catch(err => console.log("Db not connect" + err))
app.listen(port, () => {
    console.log("Server Connection")
})