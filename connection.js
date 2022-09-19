const {Client}=require('pg')
const client=new Client({
   host:'localhost',
   user:"postgres",
   port:5432,
   password:'Nagaraju@2506',
   database:'sample'
})
module.exports=client;