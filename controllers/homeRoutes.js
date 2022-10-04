const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


router.get('/home', async (req, res) => {
    try {
        const PostsData = await Post.findAll({
            include: [User],
            order: [['created_at', 'DESC']],
        });
        const posts = PostsData.map((post) => post.get({ plain: true }));

        res.render('home', {
            layout: 'main',
            posts,
        });

    } catch (err) {
        console.log(err);
        response.status(500).json(err);
    }
});

router.get('/', withAuth, async (req, res) => {
    try {
        const PostsData = await Post.findAll({
            include: [User],
            order: [['created_at', 'DESC']],
        });
        const posts = PostsData.map((post) => post.get({ plain: true }));

        res.render('home', {
            layout: 'dashboard',
            posts,
        });

    } catch (err) {
        console.log(err);
        response.status(500).json(err);
    }
});

router.get('/signup', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup', {
        layout: 'main'
    });
});

router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login', {
        layout: 'main'
    });
});

module.exports = router;