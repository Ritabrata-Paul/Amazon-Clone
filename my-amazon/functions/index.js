const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")
('sk_test_51LQtxKSHr6ShtB9Ub1ElsXaroFo98IvH6JOCy5JQqsZw44WcUF9uK8ts1DEM6nepTzIZh0L2a1pu5aQlI6JLAcAy00Ijjy4UJb');


//API

//App config
const app = express();


//middlelewares
app.use(cors({origin: true}));
app.use(express.json());


// Api routes
app.get('/', (request, response) => {response.status(200).send('Hello World')})

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log ('Payment Request Received ! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    response.status(202).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// listen command

exports.api = functions.https.onRequest(app)
