https = require('https');//引入 htts 模块
var express = require('express');
const OAPI_HOST = 'https://oapi.dingtalk.com';
var querystring = require('querystring');

class cdohttps 
{
    constructor()
    {

    }


    invoke(path, params) {
        return function(cb) {
            https.get(OAPI_HOST + path + '?' + querystring.stringify(params), function(res) {
                if (res.statusCode === 200) {
                    var body = '';
                    res.on('data', function (data) {
                        body += data;
                    }).on('end', function () {
                        var result = JSON.parse(body);
                        if (result && 0 === result.errcode) {
                            cb(null, result);
                        }
                        else {
                            cb(result);
                        }
                    });
                }
                else {
                    cb(new Error(response.statusCode));
                }
            }).on('error', function(e) {
                cb(e);
            });
        }
    }

    requestGet(url){
        return new Promise(function(resolve,reject){
            //console.log('https url:'+url);
            https.get(url,function(res){
                var buffer = [],result = "";
                //监听 data 事件
                res.on('data',function(data){
                    buffer.push(data);
                });
                //监听 数据传输完成事件
                res.on('end',function(){
                    result = Buffer.concat(buffer).toString('utf-8');
                    //将最后结果返回
                    //console.log('https result:'+result);
                    resolve(result);
                });
            }).on('error',function(err){
                reject(err);
            });
        }).catch(function(error)
        {
    
        });
    }

    /**
     * 用于处理 https Post请求方法
     * @param {String} url  请求地址
     * @param {JSON} data 提交的数据
     */
    requestPost(url,data){
        return new Promise(function(resolve,reject){
            //解析 url 地址
            var urlData = urltil.parse(url);
            //设置 https.request  options 传入的参数对象
            var options={
                //目标主机地址
                hostname: urlData.hostname, 
                //目标地址 
                path: urlData.path,
                //请求方法
                method: 'POST',
                //头部协议
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(data,'utf-8')
                }
            };
            var req = https.request(options,function(res){
                var buffer = [],result = '';
                //用于监听 data 事件 接收数据
                res.on('data',function(data){
                    buffer.push(data);
                });
                 //用于监听 end 事件 完成数据的接收
                res.on('end',function(){
                    result = Buffer.concat(buffer).toString('utf-8');
                    resolve(result);
                })
            })
            //监听错误事件
            .on('error',function(err){
                console.log(err);
                reject(err);
            });
            //传入数据
            req.write(data);
            req.end();
        });
    }

}
module.exports = cdohttps;