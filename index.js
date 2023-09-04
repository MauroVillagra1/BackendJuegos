import  express  from 'express'
import cors from "cors"
import morgan from "morgan"
import "dotenv/config" // Permite procesar variables de entorno
import router from './src/routes/juego.routes.js'


console.log("Prueba 2")
//Crea la variable
const app = express();
app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), ()=>{console.log("Estoy en el puerto "+app.get("port"))})


//Permite conexiones remotas
app.use(cors());
//Permite interpretar datos en formato json
app.use(express.json())
//Ayuda a interpretar los datos del body del request
app.use(express.urlencoded({extended:true}))
//Nos da mas informacion de la terminal
app.use(morgan("dev"))


app.use("/api", router)

