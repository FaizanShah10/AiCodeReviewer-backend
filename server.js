const express = require('express');
require('dotenv').config();
const cors = require('cors');

const aiRoutes = require('./src/routes/ai.routes');


const app = express();
const port = 5000;

const corsOptions = {
    origin: "https://codegenie-tau.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Authorization"],
    credentials: true  
};

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://codegenie-tau.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(cors(corsOptions))
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/ai', aiRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});