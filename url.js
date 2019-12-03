“use strict”;
var crypto = require(‘crypto’);
var axios = require(‘axios’);
function main(argv) {
 /**
  * このコードは引数と標準出力を用いたサンプルコードです。
  * このコードは好きなように編集・削除してもらって構いません。
  *
  * This is a sample code to use arguments and outputs.
  * You can edit and even remove this code as you like.
  *
  */
 var fs = require(“fs”);
 var readline = require(“readline”);
 var stream = fs.createReadStream(argv[0], “utf8");
 var reader = readline.createInterface({ input: stream });
 argv.forEach((v, i) => console.log(argv[${i}]: ${v}));
 //var hashes = crypto.getHashes();
 //var hash = crypto.createHash(‘’);
 axios.get(’http://challenge-server.code-check.io/api/hash?', {
    params: {
   q: “#”
 }
 })
.then(response => {
   console.log(‘status:’, response.status); // 200
   console.log(‘body:’, response);     // response body.
// catchでエラー時の挙動を定義する
}).catch(err => {
   console.log(‘err:’, err);
});
}
main(process.argv.slice(2));
var fs = require(“fs”);
 var readline = require(“readline”);
 var stream = fs.createReadStream(argv[0], “utf8");
 var reader = readline.createInterface({ input: stream });