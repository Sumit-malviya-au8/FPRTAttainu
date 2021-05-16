import PostMessages from "../models/postMessages.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessages.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessages(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });

  }
};
