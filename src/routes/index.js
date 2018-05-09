import express from 'express';
import * as db from '../lib/db';

const router = express.Router();

router.get('/', async(req, res) => {
    const getStatus = await db.testConnect();
    console.log(getStatus);
    res.send({message: `Hey i\'m faisal arkan, if you see this, everything works fine. ᕦ(ò_óˇ)ᕤ`, database: getStatus});
});

router.get('/alik',async(req, res) => {
    const row = await db.query('select * from user');
    res.send( row);
});

router.post('/createUser', async(req, res) => {
    const {nama, rekening} = req.body;
    const tableName = 'user';
    const tableValue = {
        nama: nama,
        rekening: rekening
    }
    const result = await db.insertRow(tableName, tableValue, res);
    res.sendStatus(200);
});


export default router;
