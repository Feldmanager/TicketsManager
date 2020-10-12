const express = require('express');
const ticketRouter = require("./Routes/TicketRoutes.js");
const ticketsRouter = require("./Routes/TicketsRouter.js");
const statusRouter = require("./Routes/StatusRouter.js");
const commentRouter = require('./Routes/CommentRouter.js');
const commentsRouter = require('./Routes/CommentsRouter.js');
const {Authorize,ValidateUser}= require('commonframework');
const cors = require("cors")
var corsOptions = {
    origin: [
        'http://localhost:3001',
        'http://localhost:3000'//,
        // 'http://10.1.0.14:3001',
        // 'http://10.1.0.27:3001',
        // 'http://10.1.0.19:3001',
        // 'http://10.1.0.19:3000',
        // 'http://10.1.0.17:3001'
    ],
    optionsSuccessStatus: 200
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


let server = app.listen(3000, () => console.log('Listening on port 3000...'));