import express from "express";
import { upload } from "../utils/multer";
import Photo from "../controller/photo";
const router = express.Router();


router.get("/", Photo.index);

router.post("/save", upload.single('filename'), Photo.save);

export default router;