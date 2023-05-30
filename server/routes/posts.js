import express from 'express';

import { getPosts, createPost , deletePost} from '../controllers/posts.js'

const router = express.Router();

//localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id',deletePost);



export default router;