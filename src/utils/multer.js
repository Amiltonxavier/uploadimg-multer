import multer from "multer";
import path from "path";
import crypto from "crypto";


const multerFilter = (req, file, cd) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cd(null, true);
    } else {
        cd(new Error("Imagem invalida"), false);
        //console.log(Error);
    };
}

const multerStorage = multer.diskStorage({
    destination: (req, res, cd) => {
        cd(null, path.resolve(__dirname, "..", "public", "images"))
    },
    filename: (req, file, cd) => {
        crypto.randomBytes(16, (err, hash) => {
            const filename = `${hash.toString("hex")}-${file.originalname}`
            cd(null, filename);
        })
    },
});

export const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});