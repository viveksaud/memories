import express from 'express';

import { getPosts, createPost , deletePost, updatePost, likePost} from '../controllers/posts.js'

const router = express.Router();

//localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id',deletePost);
router.patch('/:id',updatePost);
router.patch('/:id/likePost',likePost); 


export default router;