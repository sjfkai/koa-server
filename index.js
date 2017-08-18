const Koa = require('koa');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const config = require('./src/config/config.json');
const router = require('./src/routes');
const adjustResponse = require('./src/middlewares/adjust-response');
const jsonQueryParser = require('./src/middlewares/json-query-parser');


const app = new Koa();

app.use(adjustResponse);

// logger
app.use(logger());

// parse query.jq
app.use(jsonQueryParser());

// bodyParser
app.use(bodyParser());

// cors
app.use(cors());

// response
app.use(router.routes(), router.allowedMethods());

app.listen(config.port);
console.log(`server started at ${config.port}`);
