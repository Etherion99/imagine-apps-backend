let express = require('express');
let user_routes = require('./routes/user');

let app = express();

app.use('/api', user_routes);

app.listen(3000, () => {
  console.log('API iniciada');
});