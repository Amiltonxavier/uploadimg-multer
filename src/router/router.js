import express from "express";
import { upload } from "../utils/multer";
import Photo from "../controller/photo";
const router = express.Router();


router.get("/", Photo.index);

router.post("/save", upload.single('filename'), Photo.save);
router.get("/home", Photo.get);
router.post("/delete/:id", Photo.deleteimg);
router.get("/getOne/:id", Photo.getOne);
router.post("/update/:id", upload.single('filename'), Photo.update);

export default router;