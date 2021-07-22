import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AddScreen from '../screens/AddScreen'
import BoardScreen from '../screens/BoardScreen'

const Main = createStackNavigator()

const MainNavigator = () => {
    return (
        <Main.Navigator>
            <Main.Screen name="BoardScreen" component={BoardScreen}
            options={{ headerTitle: 'Board' }}/>
            <Main.Screen name="AddScreen" component={AddScreen}
            options={{ headerTitle: 'Add Task' }}/>
        </Main.Navigator>
    )
}

export default MainNavigator
