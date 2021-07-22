import express from 'express'
import tasksRoutes  from './routes/tasks.routes'
const app = express();

app.set('port', process.env.port || 4000);


//routes

app.use('/api/tasks',tasksRoutes)


export default app;