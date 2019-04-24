const express = require('express');
const app = express();
const router = express.Router();

router.get('/' ,(req,res) => {
    res.send('Starting')
});


app.use(router);

app.listen(8000);