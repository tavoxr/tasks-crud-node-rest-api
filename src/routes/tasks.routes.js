import {Router} from 'express'
import Task from '../models/Task'
import tasksCtrl from '../controllers/tasks.controllers'
const router = Router()


router.get('/', tasksCtrl.getTasks)

router.post('/', async (req,res)=>{

    
    const {title,description, done} = req.body

    const newTask = new Task({
        title,
        description,
        done
    })

    const taskSaved = await  newTask.save();

    console.log('task', taskSaved)
    res.json(taskSaved)
      
})


export default router;