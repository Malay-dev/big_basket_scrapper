import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import browse_router from "./routers/browse_router.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const url_logger = (upperCase) => {
  if (typeof upperCase !== "boolean") {
    upperCase = true;
  }
  return (req, res, next) => {
    console.log(
      "Logging:",
      upperCase ? req.url.toUpperCase() : req.url.toLowerCase()
    );
    next();
  };
};
app.enable("trust proxy");
app.use(cors());
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));
app.use(url_logger(true));
app.use(express.json());
app.use(express.static("public"));

app.use("/browse", browse_router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
