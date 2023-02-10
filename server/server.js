import express from "express"
import cors from "cors"
import morgan from "morgan"
import connect from "./database/conn.js"

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by') //less hackers know about our stack

const port = 8000

//HTTP get request
app.get('/', (req, res) => {
  res.status(201).json("Home get request")
})

//start server only when have valid connection
connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`server connected to http://localhost:${port}`);
    })
  } catch (err) {
    console.log("can't connect to server", err);
  }
}).catch((err) => {
  console.log("Invelid database connection", err);
});
