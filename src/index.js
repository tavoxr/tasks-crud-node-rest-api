import app from './app';
import './database';

const port = app.get('port');

//server
app.listen(port,()=>{
    console.log("Server running on port ", port);
});