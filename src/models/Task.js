import {Schema, model} from 'mongoose'

const taskSchema = new Schema({
    title: {
        type: String

    },

    description:{
        type: String

    },

    done: Boolean

})

export default model('Task', taskSchema);