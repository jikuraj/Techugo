const express=require('express');
const bodyParser=require('body-parser');
const fs=require('fs');

let app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/',(req,res)=>{
    let  name=req.body.name;
    let email=req.body.Email;
    let password=req.body.password;

     res.send(fs.writeFileSync('index.txt', 'name:'+name+'  '+'Email:'+email+' '+"password: "+password));
});



app.listen(3000,()=>{
    console.log('port is running on 3000');
})



//api key:42f81203d15f83b8546d46b3793ca1eb-us5

//id:98c851b73a.