import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();

const pets = [];

router.get("/", (req, res) => {
  res.send({ pets });
});

router.post("/", uploader.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({
      status: "error",
      message: "No file uploaded",
    });
  }

  const pet = req.body;
  pet.thumbnail = req.file.path;
  pets.push(pet);
  res.status(201).send({
    status: "success",
    pets,
  });
});

export default router;
