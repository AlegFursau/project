import { error, log } from "console";
import { NextFunction } from "express";

const db = require('./db/service/db.service')
require('dotenv').config();

// const cluster = require('node:cluster');
// const numCPUs = require('node:os').availableParallelism();
const bodyParser = require('body-parser')
const store = require('./routes/main');
const prods = require('./routes/products');
const {BufferService} = require('./buffer/buffer.service');

const express = require("express");
const app = express();
const diagnostics_channel = require('node:diagnostics_channel');

log(diagnostics_channel)
// db.connect()
app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(store);
app.use('/new_product',prods);


app.listen(4000, (error: Error) => {
      if (error) return;
 
      console.log(`Worker ${process.pid} started`);
    });











