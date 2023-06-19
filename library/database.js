let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'https://databases.000webhost.com/',
   user:        'id17203131_trans',
   password:    'Iqbal2507.',
   database:    'id17203131_transprima'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi Berhasil!');
   }
 })

module.exports = connection; 