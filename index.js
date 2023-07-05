
const express = require("express");

const app = express();

app.get("/api/main", (req, res) => {

    res.send(data)
});

const data=`<html>
<h1>What is Express?</h1>
<p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
</html>`;

app.listen(4000,()=>{console.log("Server is running")})


