import app from './app'
import './database'


//server
const port = app.get('port');

app.listen(port,()=>{
    console.log("Server running on port ", port);
})