const express = require('express');
const ticketRouter = require("./Routes/TicketRoutes.js");
const ticketsRouter = require("./Routes/TicketsRouter.js");

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use("/Ticket", ticketRouter);
app.use("/Tickets", ticketsRouter);

let server = app.listen(3000, () => console.log('Listening on port 3000...'));