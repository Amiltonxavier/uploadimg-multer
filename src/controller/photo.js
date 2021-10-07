import Img from "../models/img";



const index = (req, res) => {
    return res.render("index");
};

const save = async (req, res) => {

    const { title, description } = req.body;
    
    const { filename } = req.file;

    if(!title || !filename || Object.keys(req.file).length === 0) return res.render("index", { error: "Existem campos vázios" })
    try {
        const result = await Img.create({
            title: title,
            filename: filename,
            descript: description
        });
        return res.redirect("home");

    } catch (error) {
        console.log(error);
    }

}

const get = async (req, res) => {
    const data = await Img.findAll();
    return res.render("home", {data: data});
}



export default {
    index, save, get
}