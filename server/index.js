const express=require('express');
const app=express();
const cors=require('cors');
const Route=require('./router/route');
const connectToDatabase=require('./db/db.js');
const PORT=8000;
app.use(cors());

app.use(express.json());

app.use("/",Route);

connectToDatabase();

app.listen(PORT,()=>{
    console.log(`our server is running on port ${PORT}`)
})

