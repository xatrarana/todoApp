require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/route');
const port = process.env.PORT || 4545;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())





app.use('/api/v1', router);
const startServer = () => {
    try {
        app.listen(port ,()=>console.log(`server is running at http://localhost:${port}`));
    } catch (e) {
        console.log(e);
    }
}

startServer();