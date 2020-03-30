import express from 'express';
import path from 'path';

const router = express.Router();

/* GET home page. */
router.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, '../../../client/build', 'index.html'));
});

export = router;
