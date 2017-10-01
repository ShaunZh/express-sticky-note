var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 通过 req.query 得到请求的参数
  console.log(req.query);
  // index 指的是 views/index.ejs ；为什么能找到它呢？
  // 因为我们在根目录下的app.js中使用了以下两句程序设置了模板引擎的相关信息:
  // app.set('views', path.join(__dirname, 'views'));  设置了模板引擎的路径
  // app.set('view engine', 'ejs');   设置模板引擎为 ejs
  // { title: 'Express' } ： 表示传递 title='Express' 到index.ejs 中
  res.render('index', { title: 'Express' });
});

module.exports = router;
