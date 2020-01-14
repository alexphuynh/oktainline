var express = require("express");
var app = express();
app.get("/names", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });
app.get("/zipcode", (req, res, next) => {
    res.json(["30318"]);
   });
app.get("/acctnumber", (req, res, next) => {
    res.json(["44955-48585-44832-44955"]);
   });
app.get("/email", (req, res, next) => {
    res.json({ email: 'resident@cox.com' });
   });
app.get("/channels", (req, res, next) => {
    res.json({ HBO: 'Yes' },{ CNN: 'Yes' });
   });
app.listen(3000, () => {
 console.log("Server running on port 3000");
});