import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    console.log("req ko body: post ko data");
    console.log(post);
    

    const newPost = new PostMessage(post);
    console.log("new post ko data");
    console.log(newPost);

    try {
        await newPost.save();
        console.log("save paxi ko post ko data");
        console.log(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({message: error});
    }
};

export const deletePost = async (req,res) => {
    // const id = req.params.id;
    const { id } = req.params;
    console.log('id id id ...........................................');
    console.log(id);
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await PostMessage.findByIdAndRemove(id);
console.log('delete delete delete')
    res.json({message: 'Post Deleted Successfully!'});
};










