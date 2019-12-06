const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx) => {
  const query = ctx.query
  ctx.body = 'Hello from koa.js!The query string is' + JSON.stringify(query);
});

module.exports = app.callback();
