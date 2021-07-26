import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
import { View } from 'react-native'
import { CLR_LIGHTGRAY, CLR_WHITE } from '../constants/Colors'
import AddScreen from '../screens/AddScreen'
import BoardScreen from '../screens/BoardScreen'
import { MainNavigatorParamList } from '../types'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import styled from 'styled-components/native'

const Main = createStackNavigator<MainNavigatorParamList>()

const MainNavigator = () => {

    return (
        <Main.Navigator screenOptions={{headerStyle: {backgroundColor: CLR_WHITE, elevation: 0, shadowOpacity: 0 , borderBottomWidth: 2, borderBottomColor: CLR_LIGHTGRAY}, headerTitleStyle: {fontWeight: "bold", marginLeft: 8}}}>
            <Main.Screen name="BoardScreen" component={BoardScreen}
            options={{ headerTitle: 'Board',
            headerRight: () => (
                <RightContainer>
                    <SimpleLineIcons style={{marginRight: 14}} name="magnifier" size={18} color="black" />
                    <SimpleLineIcons style={{marginRight: 14}} name="bell" size={18} color="black" />
                    <SimpleLineIcons style={{marginRight: 22}} name="menu" size={18} color="black" />
                </RightContainer>
            ) }}/>
            <Main.Screen name="AddScreen" component={AddScreen}
            options={{ headerTitle: 'Add Task' }}/>
        </Main.Navigator>
    )
}

export const RightContainer = styled.View`
    flex-direction: row;
`;

export default MainNavigator
