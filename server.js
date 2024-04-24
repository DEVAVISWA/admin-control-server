const express = require("express");
const mongoose = require("mongoose");
const clientRoutes = require("./routes/client.routes");
const cors = require("cors");

require("dotenv").config();
// Create express app
const app = express();

app.use(express.json());

//cors
// app.use(cors());
const corsOptions = {
  origin: [
    "https://admin-control-client.vercel.app",
    "http://localhost:3000",
  ],
};
app.use(cors(corsOptions));

// app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


// Set up a route
app.use("/client", clientRoutes);

//setup a default route
app.use("/", (req, res) => {
  res.send("<h1>Admin control by Deva Viswa G</h1>");
});

// Set up the server and

// connect to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to the database");
    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
