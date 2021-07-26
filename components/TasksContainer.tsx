import React from 'react'
import styled from 'styled-components/native';
import { View, useWindowDimensions, Text } from 'react-native';
import Layout from '../constants/Layout';
import { TabsTypes } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';
import { CLR_BLACK, CLR_WHITE } from '../constants/Colors';
import { toggleStatus } from '../redux/actions';
import { getRandomColor } from '../utils';

const COLORS = ["","","","","","","","","",""].map(() => getRandomColor())

const TasksContainer = ({currentTab} : {currentTab: TabsTypes}) => {
  let tasks = useSelector((state: RootState) => state);

  const dispatch = useDispatch()

  if(currentTab !== "All") tasks = tasks.filter((task) => task.status === currentTab.toLowerCase())

  const handleToggle = (id:string) => {
    dispatch(toggleStatus(id))
  }

  return <Outer >
    {
      tasks.map((task, i) => {
        return <Task key={"task"+i}>
          <Toggle status={task.status} color={COLORS[i%10]} onPress={() => handleToggle(task.id)}>
            {task.status === "completed" && <Tick>✓</Tick>}
          </Toggle>
          <TaskText>{task.title}</TaskText>
        </Task>
      })
    }
  </Outer>
}

export default TasksContainer

interface ToggleProps {
  status: any,
  color: any
}

export const Toggle = styled.TouchableOpacity<ToggleProps>`
  width: 25px;
  height: 25px;
  border: 2px solid ${p => p.color};
  border-radius: 6px;
  margin-right: 15px;
  background-color: ${p => p.status === "completed"? p.color: "transparent"};
  justify-content: center;
  align-items: center;
  
`;

export const Tick = styled.Text`
  color: ${CLR_WHITE};
  font-weight: 500;
`;

export const Task = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 15px 25px;
  align-items: center;
`;

export const TaskText = styled.Text`
  font-weight: 600;
  color: ${CLR_BLACK}
`;

export const Outer = styled.View`
    flex: 1;
    width: 100%;
    padding-top: 10px;
`

