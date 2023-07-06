import express from "express";
import request from "request";
import cors from "cors";

import  { loadBackend_ana } from "./backend/v2/index_ana.js";
import { handler } from "./frontend/build/handler.js";

var app = express();
app.use(cors());

var port = process.env.PORT || 12345;

app.use(express.json());
app.use(express.static("./public"));

// Proxy Ana
var paths_ana = "/employ";
var apiServerHost_ana = "https://sos2223-13.appspot.com/api/v1/employment-stats";

app.use(paths_ana, function(req,res){
    var url = apiServerHost_ana + req.url;
    req.pipe(request(url)).pipe(res);
});

app.get("/", (request,response) => {
    response.sendFile("/public/index.html");
});

loadBackend_ana(app);

app.use(handler);

app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});