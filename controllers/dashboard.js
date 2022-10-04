const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const allPosts = Post.findAll({
            include: [User],
            where: {
                user_id: req.session.user_id,
            },
            order: [['created_at', 'DESC']],
        });
        
        const userPosts = (await allPosts).map((post) => post.get({ plain: true }));
        
        res.render('userpost', {
            layout: 'dashboard',
            userPosts
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/new', withAuth, async (req, res) => {
    res.render('newPost', {
        layout: 'dashboard'
    });
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postbyKey = await Post.findByPk(req.params.id);
        const post = postbyKey.get({ plain: true });
        res.render('editPost', {
            layout: 'dashboard',
            post
        });

    } catch (err) {
        console.log(err);
        res.redirect('login');
    }
});

module.exports = router;