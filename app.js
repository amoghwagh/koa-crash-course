const Koa = require("Koa");
const koaRouter = require("koa-router");
const json = require("koa-json");

const router = new koaRouter();
const app = new Koa();

app.use(json());

router.get("/test", ctx => (ctx.body = "Hello Test"));

app.use(router.routes()).use(router.allowedMethods());
app.use(async ctx => (ctx.body = { msg: "Hello World!" }));

app.listen(3000, () => console.log("Server Started on port 300ṭ0"));
