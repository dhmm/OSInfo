const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const os = require('os');

app.set('view engine', 'ejs');

const ROOT_DIR = __dirname;
app.use(express.static(path.join(ROOT_DIR + '/public')));

router.get('/' ,(req,res) => {     
    showInfo(res , loadPage);
});

showInfo = (res ,next) => {

    var generalInfo  = new Object({
        operatingSystem : os.type(),
        platform : os.platform(),
        hostname : os.hostname(),
        freeMem : os.freemem(),
        totalMem : os.totalmem(),
        user : os.userInfo()
        
    });
    var data = new Object ({
        generalInfo: Object.entries(generalInfo),
        constants: Object.entries(os.constants) ,
        cpus : Object.entries(os.cpus()),
        networkInterfaces : Object.entries(os.networkInterfaces())
    });   
        
    next(res,data);
}

loadPage = (res, data) => {
    res.render('pages/index' , { data: data } );
}


app.use(router);
app.listen(8000);