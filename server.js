import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import onSocket from "./socket.js";

import path from 'path';
const __dirname = path.resolve();

const app = express();
const httpServer = createServer(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/"));
const io = new Server(httpServer);
onSocket(io);

const port = process.env.PORT || 8000;
httpServer.listen(port, () => console.log(`Listening on port ${port}`));
