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


const deleteimg = async (req, res) => {
    const id = Number(req.params.id);

    await Img.destroy({ where: { id: id } });

    return res.redirect("/home");

}

const getOne = async (req, res) => {
    const id = req.params.id
    const result = await Img.findOne({where: {id: id}});
    res.render('update', result.dataValues);
}

const update = async (req, res) => {
    const id = req.params.id;
    const { title , descript} = req.body;
    const { filename } = req.file;

    if(!title || !filename || Object.keys(req.file).length === 0) return res.render("index", { error: "Existem campos vázios" })
        try {
            
            const result = await Img.findOne({ where: { id: id } });
            
            result.title = title;
            result.descript = descript;
            result.filename = filename;

            result.save();
                return res.redirect("/home");
        } catch (error) {
            console.log(error);
        }
    
}



export default {
    index, save, get, deleteimg, update, getOne
}