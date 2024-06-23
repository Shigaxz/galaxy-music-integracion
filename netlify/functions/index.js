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

router.post("/promos", (req, res) => {
    const newPromo = req.body;
    newPromo.id = promosData.length + 1;
    promosData.push(newPromo);
    res.status(201).json(newPromo);
});

router.put("/promos/:id", (req, res) => {
    const { id } = req.params;
    const updatedPromo = req.body;
    const promoIndex = promosData.findIndex(promo => promo.id === parseInt(id));

    if (promoIndex !== -1) {
        promosData[promoIndex] = { ...promosData[promoIndex], ...updatedPromo };
        res.json(promosData[promoIndex]);
    } else {
        res.status(404).json({ message: "Promoción no encontrada" });
    }
});

router.delete("/promos/:id", (req, res) => {
    const { id } = req.params;
    const promoIndex = promosData.findIndex(promo => promo.id === parseInt(id));

    if (promoIndex !== -1) {
        const deletedPromo = promosData.splice(promoIndex, 1);
        res.json(deletedPromo);
    } else {
        res.status(404).json({ message: "Promoción no encontrada" });
    }
});

app.use('/.netlify/functions/server', router);

export const handler = serverless(app);