const app = require('./src/app')
require('dotenv').config()


const port = process.env.PORT_BACK || 3333;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});