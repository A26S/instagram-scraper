import express from 'express'
import router from './router.js'
import accessControl from './middleware/accessControl.js'

const app = express()
app.use(express.json())
app.use(accessControl)
app.use(router)

const port = process.env.PORT || 1000
app.listen(port, () => console.log(`port ${port} connected`))