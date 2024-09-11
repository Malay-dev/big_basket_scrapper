import express from "express";
import browse_link from "../controllers/browse_link.js";

const browse_router = express.Router();

browse_router.post("/", browse_link);
export default browse_router;
