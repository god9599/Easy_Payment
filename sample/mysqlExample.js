var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',//내 컴퓨터에 설치
  user     : 'root',
  password : 'qjelqjel01!',
  database : 'fintech'//schema 이름
});
 
connection.connect();
 
connection.query('SELECT * FROM user;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();