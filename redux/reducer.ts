import { IAction } from './../types';
import { ITaskRedux } from "../types";
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const initialState: ITaskRedux[] = [{
    title: "Go out",
    deadline: "2/20/2021",
    startTime: "18:00",
    endTime: "19:00", 
    remind: "weekly",
    repeat: "never",
    id: "1",
    status: "completed"
},{
    title: "Eat Dinner",
    deadline: "2/20/2021",
    startTime: "20:00",
    endTime: "21:00", 
    remind: "weekly",
    repeat: "never",
    id: "2",
    status: "uncompleted"
}
];


export const reducer = (state = initialState, action:IAction) => {
    switch(action.type) {
        case "ADD_TASK": 
            let task: ITaskRedux = {
                ...action.payload,
                id: uuidv4(),
                status: "uncompleted"
            }
            let newState = [...state, task];
            storeData(newState)
            return newState

        case "TOGGLE_STATUS": 
            let tasks = state.map((task) => {
                if(task.id === action.payload) {
                    task.status = task.status === "completed" ? "uncompleted": "completed"
                }
                return task
            })
            storeData(tasks)
            return tasks

        case "GOT_TASKS_STORAGE":
            return action.payload

        default: 
            return state
    }
}

const storeData = async (value: any) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('tasks', jsonValue)
    } catch (e) {
    // saving error
    }
}

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('tasks')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  

export type RootState = ReturnType<typeof reducer>;