const Koa = require("Koa");
const json = require("koa-json");

const app = new Koa();

app.use(json());
app.use(async ctx => (ctx.body = "Hello World!"));

app.listen(3000, () => console.log("Server Started on port 300ṭ0"));
