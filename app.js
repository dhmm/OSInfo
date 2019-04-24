// const express = require('express');
// const app = express();
// const path = require('path');
// const router = express.Router();
// const os = require('os');


// app.set('view engine' , 'ejs');

// const ROOT_DIR = __dirname;

// //app.use(express.static(ROOT_DIR + '/public'));

// /*router.get('/' ,(req,res) => {
//     alert(ROOT_DIR);
//     res.sendFile(path.join(ROOT_DIR+'/public/index.html'));
// });*/

// app.get('/' , (req,res) => {
//     res.render(path.join(ROOT_DIR+'/public/indexrs'));
// })

// app.use(router);

// app.listen(8000);

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
        constants: Object.entries(os.constants) 
    });

    console.log(data.constants);
    res.render('pages/index' , { data: data } );
});


app.use(router);
app.listen(8000);