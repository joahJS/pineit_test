import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const router = express.Router();

//Get home page
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});

//module.exports = router;
console.log('zz')
export default router
