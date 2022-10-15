const express = require("express");
const handlebars = require("express-handlebars")
const productRouter = require("./src/routes/rutasProductos");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(8080, () => {
    console.log("server on port 8080")
})


app.engine("handlebars", handlebars.engine());

app.set("views", "./src/views")

app.set("view engine", "handlebars")


app.use("/", productRouter)