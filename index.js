import express from   'express';
import { config } from 'dotenv';
config()
import usuariosRoutes from './routes/usuarios.routes.js'

const port = process.env.port || 3000;

const app = express()
app.use(express.json())

app.use("/api/usuario", usuariosRoutes)

app.listen(port, ()=>{
console.log("David Server is Runing on https://localhost:"+ port)

})