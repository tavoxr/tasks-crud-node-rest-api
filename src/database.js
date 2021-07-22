import mongoose from 'mongoose'
import config from './config'


const dbConexion = async ()=>{

    await mongoose.connect(config.mongodbUrl,
                          {useNewUrlParser: true,
                           useUnifiedTopology: true,   
                          }
                    );

}

dbConexion();

const db = mongoose.connection;

db.once('open', ()=>{
    console.log("Database connected to: ", config.mongodbUrl );
})



