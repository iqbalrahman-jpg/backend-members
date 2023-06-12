let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'sql12.freesqldatabase.com',
   user:        'sql12625500',
   password:    'mY5aYUX5lb',
   database:    'sql12625500'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi Berhasil!');
   }
 })

module.exports = connection; 