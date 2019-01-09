
const pool = require('/index');

function getAllPosts() {
    return pool.query('SELECT NOW()')
    .then(result => console.log(result))
    .catch(e => console.error(e.stack))
    .then(() => pool.end());
}
  
function addPost(post) {
    return pool.query(text, values)
    .then(res => {
      console.log(res.rows[0])
    })
    .catch(e => console.error(e.stack))
}
  
  
  module.exports = {
    getAllPosts,
    addPost,
};