import Task from '../models/Task'




export const getTasks = async (req,res)=>{    

    const tasks =  await Task.find();
    res.json(tasks);
}

export const createTask = async (req,res)=>{    

    const {title, description, done} = req.body
    
    const newTask =  new Task({
        title,
        description,
        done
    })

    const taskSaved =  await newTask.save();

    res.json(taskSaved);
}

export const getDoneTasks = async (req,res)=>{

    const tasksDone = await Task.find({done: true});
    res.json(tasksDone);
}


export const getOneTask = async (req,res)=>{    

    const task = await Task.findById(req.params.id);
    res.json(task);

}

export const updateTask = async (req,res)=>{    
        const {} = req.body
        const task =  await Task.findByIdAndUpdate(req.params.id, {})


}

export const deleteTask = async (req,res)=>{    

    const task = await Task.findByIdAndDelete(req.params.id)

    res.json({"message": `${task.id} Task was deleted successfully`})

}

