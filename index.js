const express = require('express');
const server = express();

const visitorRoutes = require('./routes/visitor-route');
const userRoutes = require('./routes/user-routes');

server.use(express.json());

server.use("/api/visitors", visitorRoutes)
server.use("/api/users", userRoutes)


const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n Running on port ${port} \n`))