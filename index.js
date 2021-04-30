const express= require('express');
const app = express();

app.get('/',(req,res) => res.send('Hello world'));

app.listen(30002);
console.log('Server on port',30002);
