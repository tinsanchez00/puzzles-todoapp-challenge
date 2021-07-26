import React from 'react'
import styled from 'styled-components/native'
import { CLR_GRAY, CLR_LIGHTGRAY } from '../constants/Colors'
import { ISelectTab, TabsTypes } from '../types'
import TabButton from './TabButton'

const TABS: TabsTypes[] = ["All", "Completed", "Uncompleted", "Favorite"]

const TabsContainer = ({selectTab, currentTab}: {selectTab: ISelectTab, currentTab: TabsTypes}) => {
    
    return (
        <Outer>
            {
                TABS.map((tab,i) => <TabButton key={"tab"+i} name={tab} selectTab={selectTab} isSelected={tab === currentTab}/>)
            }
        </Outer>
    )
}

export const Outer = styled.View`
    border: 0 solid ${CLR_LIGHTGRAY};
    border-bottom-width: 2px;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 8px;
    width: 100%;
`;


export default TabsContainer
