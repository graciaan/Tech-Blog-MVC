const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth.js');

//creates blogpost
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
      blog_id: req.params.id
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});