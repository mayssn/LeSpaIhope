const express = require("express")
var cors = require('cors')
const morgan = require("morgan")


const {
    getTreatments,
    getSingleTreatment,
    getTreatmentTypes,
    getTreatmentByType,
    addTreatment,
    deleteTreatment,
    updateQuote,
    getQuote,
    getPricelist
} = require("./pricelisthandlers")

const { createEvent } = require("./handlers")

express()
    .use(cors())
    .use(morgan("tiny"))
    .use(express.json())
    .get("/hello", createEvent)
    .get("/api/get-pricelist", getPricelist)
    .get("/api/get-treatments", getTreatments)
    .get("/api/get-treatment-types", getTreatmentTypes)
    .get("/api/get-treatment/:treatment", getSingleTreatment)
    .get("/api/get-treatment-byType/:byType", getTreatmentByType)
    .post("/api/add-treatment", addTreatment)
    .delete("/api/delete-treatment/:treatment", deleteTreatment)
    .patch("/api/update-quote", updateQuote)
    .get("/api/get-quote", getQuote)




    .listen(8000, () => { console.log("Server live on port 8000"); })