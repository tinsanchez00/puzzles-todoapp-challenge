import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import styled from 'styled-components/native'
import PrimaryButton from '../components/PrimaryButton'
import TabsContainer from '../components/TabsContainer'
import TasksContainer from '../components/TasksContainer'
import { CLR_WHITE } from '../constants/Colors'
import useTabSelectionLogic from '../hooks/useTabSelectionLogic'
import { MainNavigatorParamList } from '../types'

const BoardScreen = ({navigation} : StackScreenProps<MainNavigatorParamList>) => {
    const [currentTab, selectTab] = useTabSelectionLogic()

    return (
        <StyledBoardScreen>
            <TabsContainer selectTab={selectTab} currentTab={currentTab}/>
            <TasksContainer currentTab={currentTab}/>
            <PrimaryButton text="Add a task" action={() => navigation.navigate("AddScreen")}/>
        </StyledBoardScreen>
    )
}

export default BoardScreen

export const StyledBoardScreen = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${CLR_WHITE};
    width: 100%;
`;