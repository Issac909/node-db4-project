const app = require('./api/server');
console.log('starting...');

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
}) 