const express = require('express');
const ticketRouter = require("./Routes/TicketRoutes.js");
const ticketsRouter = require("./Routes/TicketsRouter.js");
const cors = require("cors")
var corsOptions = {
    origin: 'http://localhost:3000',
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

let server = app.listen(3000, () => console.log('Listening on port 3000...'));