import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native';
import { CLR_BLACK, CLR_GRAY } from '../constants/Colors';
import { ISelectTab, TabsTypes } from '../types';

const TabButton = ({name, selectTab, isSelected} : {name: TabsTypes, selectTab: ISelectTab, isSelected:boolean}) => {

    return (
        <Outer onPress={() => selectTab(name)}>
            <StyledText isSelected={isSelected}>{name}</StyledText>
        </Outer>
    )
}

export const Outer = styled.TouchableOpacity`
    padding: 10px 15px;
`;

interface TextProp {
    isSelected:boolean
}

export const StyledText = styled.Text<TextProp>`
    color: ${p => p.isSelected? CLR_BLACK: CLR_GRAY};
    font-weight: 500;
    text-decoration: ${p => p.isSelected? "underline": "none"};
    
`;

export default TabButton
