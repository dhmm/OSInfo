const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const os = require('os');

app.set('view engine', 'ejs');

const ROOT_DIR = __dirname;
app.use(express.static(path.join(ROOT_DIR + '/public')));

router.get('/' ,(req,res) => {       
    var data = new Object ({
        constants: Object.entries(os.constants) ,
        cpus : Object.entries(os.cpus())
    });    
    res.render('pages/index' , { data: data } );
});


app.use(router);
app.listen(8000);