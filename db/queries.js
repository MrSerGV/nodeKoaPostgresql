
const knex = require('../connection');

function getAllPosts() {
    return knex('posts').select('*');
  }
  
  function getPostById(id) {
    return knex('posts')
      .select('*')
      .where({id: parseInt(id)});
  }
  
  function addPost(post) {
    return knex('posts')
      .insert(post)
      .returning('*');
  }
  
  function updatePost(id, post) {
    return knex('posts')
      .update(post)
      .where({ id: parseInt(id) })
      .returning('*');
  }
  
  function deletePost(id) {
    return knex('posts')
      .del()
      .where({ id: parseInt(id) })
      .returning('*');
  }
  module.exports = {
    getAllPosts,
    getPostById,
    addPost,
    updatePost,
    deletePost,
  };