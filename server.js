require('dotenv').config();

const app = require('./app');
const { db } = require('./database/config');
const initModel = require('./models/initModel');

db.authenticate()
  .then(() =>
    console.log('database authenticate')
  )
  .catch((err) => console.log(err));

initModel();

db.sync()
  .then(() => console.log('database sync'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(port);
});
