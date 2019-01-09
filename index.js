const Koa = require('koa');
const app = new Koa();
const PORT = 3000;
const indexRoutes = require('./routes/index');
const postsRoutes = require('./routes/posts');
const render = require('koa-ejs');
const path = require('path');
// response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });


render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'posts',
  viewExt: 'html',
  cache: false,
  debug: false,
});


app.use(async function (ctx) {
  const posts = [{text:'test1', author: 'Dead Horse', date: new Date() }, { text:'test2', author: 'Jack',date: new Date() }, { text:'test3', author: 'Tom', date: new Date() }];
  await ctx.render('posts', {
    posts
  });
});

// routes
app.use(indexRoutes.routes());
app.use(postsRoutes.routes());




// server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});



