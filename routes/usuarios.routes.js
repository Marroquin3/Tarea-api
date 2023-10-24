import { Router } from 'express'
import fs from 'fs'
import path from "path"

const usuarioFile = path.join(process.cwd(),"data","usuarios.json")
const router = Router ()
router.get("/", (request, response)=>{
    const usuarios = readFile()
    response.json(usuarios)
})
function readFile(){
    const result  = fs.readFileSync(usuarioFile,"utf-8")
    const json =JSON.parse(result)
    return json
}

export default router
