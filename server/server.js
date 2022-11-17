import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';                
import bodyParser from 'body-parser';
import { MONGOURI } from '../config/keys';
//components
import Connection from './database/db.js';
import Router from './routes/route.js';
import { MONGOURI } from '../config/prod.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = 8000;

Connection(MONGOURI);

if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/', (req,res)=>{
        app.use(express.static(path.resolve(__dirname, 'client', 'build')))
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));