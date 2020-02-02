const Koa = require("Koa");
const koaRouter = require("koa-router");
const json = require("koa-json");
const path = require("path");
const render = require("koa-ejs");
const bodyParser = require("koa-body-parser");

const router = new koaRouter();
const app = new Koa();

const things = ["Programming", "My Family", "Music"];
app.use(json());
app.use(bodyParser());

render(app, {
  root: path.join(__dirname, "views"),
  layout: "layout",
  viewExt: "html",
  cache: false,
  debug: false
});

router.get("/", index);
router.get("/add", showAdd);
router.post("/add", addThing);

async function index(ctx) {
  await ctx.render("index", {
    title: "Things I Love",
    things: things
  });
}

async function showAdd(ctx) {
  await ctx.render("add");
}

async function addThing(ctx) {
  const body = ctx.request.body;
  things.push(body.thing);
  ctx.redirect("/");
}

router.get("/test", ctx => (ctx.body = "Hello Test"));

app.use(router.routes()).use(router.allowedMethods());
// app.use(async ctx => (ctx.body = { msg: "Hello World!" }));

app.listen(3000, () => console.log("Server Started on port 300ṭ0"));
