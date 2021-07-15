const express = require("express");
const path = require("path");
const cors = require('cors')
require("./api/data/db");
const router = require("./api/routes");
const app = express();
app.set("PORT", 8000);
app.use(cors());

app.use("/api", function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9000");

    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use("/", function(req, res, next) {
    console.log(`Received a ${req.method} with URL ${req.url}`);
    next();
})


app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));


app.use(express.static(path.join(__dirname, "public")));
app.use("/node_modules/", express.static(path.join(__dirname, "node_modules")));


app.use("/api", router);

const patchServer = app.listen(app.get("PORT"), function() {
    const PORT = patchServer.address().port;
    console.log(`LISTENING ON PORT  ${PORT}`);
})


