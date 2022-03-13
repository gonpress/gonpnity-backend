import express from 'express';

const router = express.Router();

router.post('/login', async(req, res) => {
    res.json('login');
})

router.post('/logout', async(req, res) => {
    res.json('logout');
})

router.post('/register', async(req, res) => {
    res.json('register');
})

export default router;
