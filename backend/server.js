const express = require('express');
const { PORT } = require('./config/key');
const userRouter = require('./routes/user.route');
const { db } = require('./utils/db.util');
var cors = require('cors');
const path = require("path");
const dashboardRoute = require('./routes/dashboard.route');

const app = express();
app.use(cors())
 
//Body paraser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// end

// Route
app.use("/", express.static(path.join(__dirname, "public", "build"))); 

// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "build", "index.html"));
//   });


app.use('/user', userRouter);
app.use('/dashboard', dashboardRoute);
app.use('/api', dashboardRoute);

app.listen(PORT,async()=> {
    // if any problem  in connecting database then show here:
    try{
        console.log(`Port is running on ${PORT}`);
        await db.authenticate();
        await db.sync({ alter: true });  // alter user for updated database without data lost
    }catch(e) {
        console.log(`Error: ${e.message}`);
        process.exit();
    }
})