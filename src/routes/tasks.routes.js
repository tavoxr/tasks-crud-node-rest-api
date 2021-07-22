import {Router} from 'express'
import {getTasks, createTask, 
        getOneTask, updateTask,
        deleteTask,  getDoneTasks} from '../controllers/tasks.controllers'
const router = Router();


router.get('/', getTasks);

router.post('/', createTask);

router.get('/done', getDoneTasks);

router.get('/:id', getOneTask);

router.put('/:id',updateTask);

router.delete('/:id', deleteTask);



export default router;