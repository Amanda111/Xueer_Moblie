var fs = require('fs'),
    path = require('path'),
    Mock = require('mockjs');
var data = require('./tips.js');

var result = Mock.mock(data.obj)
var json_s = JSON.stringify(result);

 
fs.open("./tips.json","w",0644,function(e,fd){
    if(e) throw e;
    fs.write(fd,json_s,0,'utf8',function(e){
        if(e) throw e;
        fs.closeSync(fd);
    })
});