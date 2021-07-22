import Task from '../models/Task'




export const getTasks = async (req,res)=>{    

    try{        
        const tasks =  await Task.find();
        res.json(tasks);
    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong creating a tasks."});
    }
    
}

export const createTask = async (req,res)=>{    

    if(!req.body.title){
        return res.status(400).send({message: "Title cannot be empty" })
    }
    try{
        const {title, description, done} = req.body
    
        const newTask =  new Task({
            title,
            description,
            done
        })
    
        const taskSaved =  await newTask.save();
        res.json(taskSaved);

    }catch(error){
        res.status(500).json({message: error.message || "Something goes wrong retrieving the tasks."});
    }
    
}

export const getDoneTasks = async (req,res)=>{

    const tasksDone = await Task.find({done: true});
    res.json(tasksDone);
}


export const getOneTask = async (req,res)=>{    
    
    const {id} = req.params;            
    try{
        const task = await Task.findById(id);
        
        if(!task) return res.status(404).json({message:`Task with id ${id} does not exists`});

        res.json(task);


    }catch(error){
        res.status(404).json({message: error.message || `Task with id ${id} does not exists`});
    }
    
}

export const updateTask = async (req,res)=>{   
    const {id} = req.params;

    try{
        const task =  await Task.findByIdAndUpdate(id, req.body);
        if(!task) return res.status(404).json({message:`Task with id ${id} does not exists`});
        res.json({"message": "Task was updated successfully"});

    }catch(error){
        res.status(404).json({message: error.message || `Task with id ${id} does not exists`});

    }    
}

export const deleteTask = async (req,res)=>{    
    const {id} = req.params;

    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({message:`Task with id ${id} does not exists`});
        res.json({"message": `${task.id} Task was deleted successfully`});
    }catch(error){
        res.status(404).json({message: error.message || `Task with id ${id} does not exists`});
    }
}

