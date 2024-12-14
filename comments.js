Synthesizing 9/10 solutions (Duplicates hidden)

Accept Solution
=======
Suggestion 1

// Create web server for comment
//==========================================

// Import module
const express = require('express');
const router express. Router();
const commentController = require('../controllers/comment

// Handle request
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_ge
router.post('/create', commentController.comment_create_p
router.get('/:id/delete', commentController.comment_delet

