import express from "express";
import routerImg from "./router/router";
import database from "./db/db";
import path from "path";
import Img from "./models/img";
const app = express();


(
    async () => {
        try {
            await database.sync()
            await database.authenticate();
            console.log("Connection has been established successfully.")
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
)();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")))
app.use(routerImg);

app.listen(4000, () => console.log("Server is running"));