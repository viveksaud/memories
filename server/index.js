import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();

import postRoutes from './routes/posts.js'

const app = express();

app.get('/', (req,res)=>{
    res.send("welcome to api!!!");
})

app.get('/', (req,res)=>{
    res.send("welcome to api!!!");
})
mongoose.set("strictQuery", false);//

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/posts', postRoutes);

// app.use(bodyParser.json({ limit: "30mb", extended: true }))
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))



// const CONNECTION_URL = "mongodb+srv://viveksaud_1:viveksaud_1password@cluster0.5soyxg6.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);//bug//deprecated

//bydefault it is  useNewUrlParser: true, useUnifiedTopology: true,'useFindAndModify', false
//so delete these from the code
