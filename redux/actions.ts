import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { ITask } from './../types';
import { initialState } from './reducer';

export const addTask = (task: ITask) => {
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export const toggleStatus = (id: string) => {
    return {
        type: "TOGGLE_STATUS",
        payload: id
    }
}
const gotTasksStorage = (payload: any) => {
    return {
        type: "GOT_TASKS_STORAGE",
        payload
    }
}

export const getTasksStorage = () => {
    return async (dispatch: Dispatch) => {
        const jsonValue = await AsyncStorage.getItem('tasks')
        let payload = jsonValue != null ? JSON.parse(jsonValue) : initialState;
        dispatch(gotTasksStorage(payload))
    }
}