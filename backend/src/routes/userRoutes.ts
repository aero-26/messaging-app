import express from "express";

import getUsers from "../controller/userController.ts";

const router = express.Router();

router.get("/", getUsers);
