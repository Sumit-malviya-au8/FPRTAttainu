import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import postRouter from './routes/posts.js'

const app = express();

app.use(express.json({limit: "30mb"}));
app.use(express.urlencoded({limit: "30mb"}));
app.use(cors())

app.use('/posts', postRouter)

const CONNECTION_URL = 'mongodb+srv://sumitmalviya:123@cluster0.ajviw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running at ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)