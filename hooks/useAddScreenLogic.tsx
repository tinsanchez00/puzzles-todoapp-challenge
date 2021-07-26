import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { InputTypes, ITask, MainNavigatorParamList } from '../types';

const useAddScreenLogic = (): [ITask, (key:InputTypes, value:string) => void, () => void] => {
    const navigation = useNavigation<StackNavigationProp<MainNavigatorParamList>>();
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        title: "",
        deadline: "",
        startTime: "",
        endTime: "", 
        remind: "",
        repeat: ""
    })

    const handleInputChange = (key:InputTypes, value:string) => {
        setInput(prev => {
            return {...prev, [key]: value}
        })
    }

    const handleSubmit = () => {
        if(input.title !== ""){
            dispatch(addTask(input))
            navigation.goBack()
        }
    }

    return [input, handleInputChange, handleSubmit]
}

export default useAddScreenLogic
