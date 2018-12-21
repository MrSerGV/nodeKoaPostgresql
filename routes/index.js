const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!',
  };
})

router.get('/not-found', async (ctx) => {
  ctx.throw(404, 'not found!');
})

module.exports = router;