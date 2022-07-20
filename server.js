const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
dotenv.config()

const DB_URL = process.env.MONGODB_SERVER.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to mongo server successfully'))
    .catch(() => console.log('connection failed :('));

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`listening on port ${port}!!!!`);
});