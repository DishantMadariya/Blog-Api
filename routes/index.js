const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

// Routes for blog posts
router.post('/posts', postController.createPost);        // Create Post
router.get('/posts', postController.getAllPosts);        // View All Posts
router.get('/posts/:id', postController.getPostById);    // View Post Details
router.put('/posts/:id', postController.updatePost);     // Edit Post
router.delete('/posts/:id', postController.deletePost);  // Delete Post

module.exports = router;
