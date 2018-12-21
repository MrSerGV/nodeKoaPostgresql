const Router = require('koa-router');
const router = new Router();
const queries = require('../db/queries');

const BASE_URL = '/posts';

router.get(BASE_URL, async (ctx) => {
  try {
    const posts = await queries.getAllPosts();
    ctx.body = {
      status: 'success',
      data: posts,
    };
  } catch (err) {
    console.log(err);
    ctx.status = 503;
    ctx.body = {
      status: 'error',
      message: 'Something wrong internal.'
    };
  }
});



router.post(BASE_URL, async (ctx) => {
  try {
    const post = await queries.addPost(ctx.request.body);
    if (post.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: post
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    console.log(err);
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})


module.exports = router;