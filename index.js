const express = require('express');
const ticketRouter = require("./Routes/TicketRoutes.js");
const ticketsRouter = require("./Routes/TicketsRouter.js");
const statusRouter = require("./Routes/StatusRouter.js");
const commentRouter = require('./Routes/CommentRouter.js');
const commentsRouter = require('./Routes/CommentsRouter.js');
const {Authorize,ValidateUser}= require('commonframework');
const cors = require("cors")
const fs = require('fs');
const https = require('https');
const privateKey  = fs.readFileSync('/run/secrets/server.key', 'utf8');
const certificate = fs.readFileSync('/run/secrets/server.crt', 'utf8');

let credentials = {key: privateKey, cert: certificate};

var corsOptions = {
    origin: [
            "http://40.118.47.110",
            "http://www.feldmanager.com",
            "https://40.118.47.110",
            "https://www.feldmanager.com",
            "https://www.feldmanager.com:3001",
            "https://40.118.47.110:3001",
            "https://www.feldmanager.com:3002",
            "https://40.118.47.110:3002",
            "https://www.feldmanager.com:3003",
            "https://40.118.47.110:3003",
            "https://www.feldmanager.com:3004",
            "https://40.118.47.110:3004"
        ]
  }
  
const app = express();
  
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

app.use(cors(corsOptions));

app.use(ValidateUser)

app.use(Authorize)

app.use("/Ticket", ticketRouter);
app.use("/Tickets", ticketsRouter);
app.use("/Status", statusRouter);
app.use('/Ticket/Comment', commentRouter);
app.use('/Ticket/Comments', commentsRouter);
app.get('/sainitys',async(req, res) =>{
  res.status(200).send();
})

let httpsServer = https.createServer(credentials, app);

let server = httpsServer.listen(3000, () => console.log('Listening on port 3000...'));
