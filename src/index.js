const {app, start} = require('./server');

const coursescontroller = require('./controllers/course.controller');
const searchcontroller = require('./controllers/search.controller');
const dataRcontroller = require('./controllers/data_R.controller');
const dataScontroller = require('./controllers/data_S.controller');
const logincontroller = require('./controllers/user_login');




app.use("/course",coursescontroller);
app.use("/search",searchcontroller);
app.use("/data_R",dataRcontroller);
app.use("/data_S",dataScontroller);
app.use("/login", logincontroller);


start();