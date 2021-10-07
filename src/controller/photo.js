import Img from "../models/img";



const index = (req, res) => {
    return res.render("index");
};

const save = async (req, res) => {

    const {title, description} = req.body;
    const { filename } = req.file;

    if(!title || !filename) return res.render("index", { error: "Existem campos vázios" })

    const result = await Img.create({
        title: title,
        filename: filename,
        descript: description
    });
    return res.render("index", result.dataValues);
}

export default {
    index, save
}