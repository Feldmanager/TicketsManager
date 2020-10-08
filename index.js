const express = require('express');
const ticketRouter = require("./Routes/TicketRoutes.js");
const ticketsRouter = require("./Routes/TicketsRouter.js");
const statusRouter = require("./Routes/StatusRouter.js")
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
  
app.use(cors(corsOptions));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use("/Ticket", ticketRouter);
app.use("/Tickets", ticketsRouter);
app.use("/Status", statusRouter);


let server = app.listen(3000, () => console.log('Listening on port 3000...'));