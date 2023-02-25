const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth.js');

//creates blogpost
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//updates blogpost 
router.put('/:id', withAuth, async (req, res) => {
  try {
    const udpateBlogPost = await BlogPost.update({
      ...req.body,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(udpateBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


//deletes blogpost
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!blogPostData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;