const express = require('express');
const ticketRouter = require("./Routes/TicketRoutes.js");

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use("/Ticket", ticketRouter);

let server = app.listen(3000, () => console.log('Listening on port 3000...'));