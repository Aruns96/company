const express = require("express");
const reviewRoute = require("./routes/review")
const sequelize = require("./utils/database");
const bodyParser = require('body-parser');

const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use("/review",reviewRoute);


sequelize.sync().then((result)=>{
    
    app.listen(3000);
}).catch(e=>{
    console.log(e);
})