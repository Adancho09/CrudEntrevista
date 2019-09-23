const path = require("path");
const app = require("express");
const morgan =require("morgan");
const mongoose =require("mongoose");

const app = express();

//conectar a db
mongoose.connect("mongodb://localhost/my-crud-prueba")
.then(db=>console.log("conectado a mongo"))
.catch(err=>console.log(err));

//configuracion
app.set("port",process.env.PORT||3000);
app.set();

//middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}))

//routes

app.listen(app.get("port"),()=>{console.log("servidor en puerto ${app.get("port")}");
