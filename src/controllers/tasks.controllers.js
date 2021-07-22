import Task from '../models/Task'

const tasksCtrl = {}


tasksCtrl.getTasks = async (req,res)=>{    

    const tasks =  await Task.find();
    res.json(tasks);
}

tasksCtrl.createTask = (req,res)=>{    


}

tasksCtrl.getTask = (req,res)=>{    

}

tasksCtrl.updateTask = (req,res)=>{    

}

tasksCtrl.deleteTask = (req,res)=>{    

}


export default tasksCtrl;