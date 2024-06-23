import express from "express";
import cors from "cors";
import ServerlessHttp from "serverless-http";
import { promos } from "./promos";

var app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

let promosData = promos();

router.get("/promos", function(req, res){
    res.json(promosData());
});

app.use('/.netlify/functions/server', router);

export const handler = serverless(app);