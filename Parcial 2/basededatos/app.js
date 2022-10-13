
let mysql      = require('mysql');
let json2xls = require('json2xls');
let fs = require('fs');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : '19100140'
});
 
connection.connect();
 
// connection.query('SELECT * FROM `19100140`.libro;', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
connection.query('SELECT * FROM libro;',function(error,results,fields){
    console.log(results);
    var xls = json2xls(results);
    fs.writeFileSync('excel.xlsx',xls,'binary')
});
connection.end();