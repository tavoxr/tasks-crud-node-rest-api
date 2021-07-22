import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import tasksRoutes from './routes/tasks.routes';


const app = express();

//settings 
app.set('port', process.env.port || 4000);

//middlewares
const corsOptions = {};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/api/tasks', tasksRoutes);


export default app;