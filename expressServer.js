const express = require('express');
const app = express();
const router = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//외부에서 접근할 수 있게 디렉토리 공개, 공개시켜줄 수 있는 파일은 public에 넣음
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
    res.send("hello");
});

//wallet.ejs
app.get("/wallet",function(req,res){
    res.render("wallet",{title:'wallet'});
});

app.get("/hello",function(req,res){
    res.send("hi");
});

//design.ejs
app.get("/designTest",function(req,res){
    res.render("design");
});

app.get('/htmlTest',function(req,res){
    res.send("<html><h1>안녕</h1><hr/><P>ㅎㅎ</p></html>");
})

app.get("/ejsTest",function(req,res){
    res.render('test');
})

app.get('/inputTest',function(req,res){
    res.render('inputTest');
})

app.post("/getLoginData",function(req,res){
    var userId = req.body.ajaxUserId;
    var userPassword = req.body.ajaxUserPassword;
    console.log("req body", req.body);
    console.log(userId, userPassword);
    
    res.json("login success");
});

app.listen(3000,function(){
console.log("success");
});
